const obj = { a: 1 };
const initBind = true;

const depManager = {
  cbs: []
};

class ObservaleObject {

}

function startCollect(callback){
  depManager.cbs.push(callback);
}

function endCollect(){
  initBind = false;
}

const observable = function (obj) {
  return new ObservaleObject(obj);
  for (const key in obj) {
    observe(obj, key, obj[key])
  }
}

const autorun = function (callback) {
  startCollect(callback);
  callback();
  // endCollect();
};

observable(obj);

autorun(() => {
  console.log(obj.a)
});

obj.a = 2;