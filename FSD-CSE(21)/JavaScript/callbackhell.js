function test1(callback) {
    setTimeout(() => {
        console.log("Test 1 completed");
        callback();
    }, 1000);
}

function test2(callback) {
    setTimeout(() => {
        console.log("Test 2 completed");
        callback();
    }, 1000);
}

function test3(callback) {
    setTimeout(() => {
        console.log("Test 3 completed");
        callback();
    }, 1000);
}

function test4(callback) {
    setTimeout(() => {
        console.log("Test 4 completed");
        callback();
    }, 1000);
}

function test5(callback) {
    setTimeout(() => {
        console.log("Test 5 completed");
        callback();
    }, 1000);
}

test1(() => {
    test2(() => {
        test3(() => {
            test4(() => {
                test5(() => {
                    console.log("All tests completed");
                });
            });
        });
    });
});