


// testObject = {
//     anyProperty: 0,
//     method: function (param) {
//         console.log(this);
//     }
// }

// test2Object = {
//     method2: function () {
//         console.log(this);
//         testObject.method();
//         var innerTest = function () {
//             console.log(this);
//         }
//     }
// }


// var funcTest = function (test) {
//     console.log(this);
// }
var innerFn = function () {
    console.log('hello world!');
}


var testObject = {
    thisMember: "test",
    
}

testObject.foo = function (a, b) {
    var value1 = a;
    var value2 = b;
    var user = 'kim';
    var that = this;
    bar();
    function bar() {
        var result = that.value1 + that.value2;
        console.log(result);
    }

}

barExecutionContext = {
    LexicalEnvironment: [barLexicalEnvironment],
    VariableEnvironment: [barLexicalEnvironment],
    ThisBinding: [window]
}

barLexicalEnvironment = {
    environment_record: {
        DeclarativeEnvironmentRecord: {
            result : NaN // === (undefined + undefined)
        },
        ObjectEnvironmentRecord : {
        }
    },
    outer_environment_referance: GlobalExecutionContext
}

function add(x,y){
    var result = x+ y;
    function emitResult(){
        console.log(result);
    }
    return emitResult
}

var emit = add(1,2);
emit();