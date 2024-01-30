export const localClient = {
  read: (key) => {
    const data = window.localStorage.getItem(key);

    try {
      return data && JSON.parse(data);
    } catch (error) {
      return null;
    }
  },

  write: (key, data) => {
    window.localStorage.setItem(key, JSON.stringify(data, null, 2));
  },

  add: (key, data) => {
    const existingData = localClient.init(key, []);
    const newId = existingData.length
      ? Math.max(...existingData.map((item) => item.id)) + 1
      : 1;

    existingData.push({ id: newId, ...data });
    window.localStorage.setItem(key, JSON.stringify(existingData, null, 2));
  },

  init: (key, initialData) => {
    if (!localClient.read(key)) {
      localClient.write(key, initialData);
    }

    return localClient.read(key);
  },
};
