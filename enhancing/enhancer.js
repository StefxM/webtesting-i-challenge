module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  if (item.enhancement < 20) {
  return { ...item, enhancement: item.enhancement + 1, };
  } else if (item.enhancement >= 20) 
    return {...item, enhancement: 20}
}

function fail(item) {
  if (item.enhancement < 15) { 
    return {...item, enhancement: item.enhancement - 5}
  }
  else if (item.enhancement > 16) {
    return {...item, enhancement: item.enhancement - 1, durability: item.durability -10}
  }
    else if (item.enhancement >= 15) { 
      return { ...item, durability: item.durability -10}
    } 
    
  return { ...item };
}

function repair(item) {


  return { ...item, durability:100 };
}

function get(item) {
  return { ...item };
}


//helpers