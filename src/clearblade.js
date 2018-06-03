import "clearblade-js-client";
/*global ClearBlade*/
const cb = new ClearBlade();

export const init = () =>
  new Promise((resolve, reject) => {
    var initOptions = {
      URI: "https://hackforchange.clearblade.com/",
      messagingURI: "hackforchange.clearblade.com/",
      messagingPort: 8904,
      useMQTT: true,
      cleanSession: true,
      systemKey: "e0a195b10b9cedb6cceebd87d9e101",
      systemSecret: "E0A195B10BF4E79FB3BC86F7C4E801",
      callback: (error, data) => {
        if (error) {
          reject(error);
        }
        resolve(data);
      }
    };
    cb.init(initOptions);
  });

export const fetchPoints = (query = {}) =>
  new Promise((resolve, reject) => {
    return cb.Code().execute("FakeCodeService", query, function(err, data) {
      if (err) {
        reject(err);
      } else {
        const results = data.results.DATA.reduce((acc, item) => {
          acc[item.id] = item;
          return acc;
        }, {});
        resolve(results);
      }
    });
  });