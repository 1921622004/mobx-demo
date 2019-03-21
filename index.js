const obj = { a: 1 };
const initBind = true;

const depManager = {
  cbs: []
};

function observe(obj, key) {
  Object.defineProperty(obj, key, {
    get(){
      if(initBind){
        initBind.cbs.push()
      };
      return obj[key]
    },
    set(oldVal, newVal){
      cbs.forEach(item => item());
      obj[key] = newVal;
    },
    configurable: true,
    writable: true
  })
}

const observable = function (obj) {
  for (const key in obj) {
    observe(obj, key)
  }
}

const autorun = function (callback) {
  startCollect();
  callback();
  endCollect();
};

observable(obj);

autorun(() => {
  console.log(obj.a)
});

obj.a = 2;