import "clearblade-js-client";
/*global ClearBlade*/
const cb = new ClearBlade();

export const init = () =>
  new Promise((resolve, reject) => {
    var initOptions = {
      URI: "https://platform.clearblade.com/",
      messagingURI: "platform.clearblade.com/",
      messagingPort: 8904,
      useMQTT: true,
      cleanSession: true,
      systemKey: "cab9aab10bf6a58df1bd98c6bdc301",
      systemSecret: "CAB9AAB10BF6A5D2D5D2BEF4B873",
      callback: (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    };
    cb.init(initOptions);
  });

export const fetchPoints = (
  query = {
    lat: 30.231044,
    long: -97.757495
  }
) =>
  new Promise((resolve, reject) => {
    return cb.Code().execute("FakeCodeService", query, function(err, data) {
      if (err) {
        reject(err);
      } else {
        if (data.results.DATA) {
          const results = data.results.DATA.reduce((acc, item) => {
            acc[item.id] = item;
            return acc;
          }, {});
          resolve(results);
        } else {
          resolve({});
        }
      }
    });
  });

export const addPoint = (point = {}) =>
  new Promise((resolve, reject) => {
    return cb.Code().execute("createPOI", point, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
