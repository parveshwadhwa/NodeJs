function add(a, b){
    return a + b;
}

function sub(a, b) {
    return a - b;
}

module.exports = {
    addFn: add, // renaming is optional
    subFn: sub
};

// one more way

// exports.addFn = (a, b) => a + b;
// exports.subFn = (a, b) => a - b;