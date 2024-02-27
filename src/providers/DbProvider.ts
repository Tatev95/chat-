import exp from "constants";

export class DbProvider {
  dbName: string;
  storeName: string;
  db: IDBDatabase | null = null;

  constructor(dbName: string, storeName: string) {
    this.dbName = dbName;
    this.storeName = storeName;
    this.openDB();
  }

  openDB(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.db) {
        return this.db;
      }
      const request = indexedDB.open(this.dbName, 1);

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        if (!db.objectStoreNames.contains(this.storeName)) {
          db.createObjectStore(this.storeName, {
            keyPath: "uniqueid",
          });
        }
      };

      request.onsuccess = (event) => {
        this.db = (event.target as IDBOpenDBRequest).result;
        resolve();
      };

      request.onerror = (event) => {
        reject((event.target as IDBOpenDBRequest).error);
      };
    });
  }

  getItems(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error("Database dont open"));
        return;
      }

      const transaction = this.db!.transaction(this.storeName, "readwrite");
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.getAll();

      request.onsuccess = (event) => {
        resolve((event.target as IDBRequest).result);
      };

      request.onerror = (event) => {
        console.log("error");
      };
    });
  }

  addItem(recording: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (!this.db) {
        reject(new Error("error"));
        return;
      }
      console.log(recording, "888");

      const transaction = this.db.transaction(this.storeName, "readwrite");
      const objectStore = transaction.objectStore(this.storeName);
      const request = objectStore.add({ recording });

      request.onsuccess = (recording) => {
        resolve();
      };

      request.onerror = (event) => {
        reject("error");
      };
    });
  }
}

const indexedDBManager = new DbProvider("RecordingsDB", "recordings");

indexedDBManager
  .addItem("Recording")
  .then(() => {
    console.log("Recording added!");
  })
  .catch((error) => {
    console.error("Error  recording:", error);
  });

indexedDBManager
  .getItems()
  .then((recordings) => {
    console.log("All Recordings:", recordings);
  })
  .catch((error) => {
    console.error("Error getting recordings:", error);
  });

export const dbProvider = new DbProvider("RecordingsDB", "recordings");
