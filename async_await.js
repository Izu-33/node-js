async function myAsyncFunction() {
    let success = false;

    if (success) {
        return "The operation was successful!";
    } else {
        throw new Error("The operation failed!");
    }
}

async function executeAsyncFunction() {
    
    try {
        const result = await myAsyncFunction();
        console.log(result);
    } catch(error) {
        console.error(error.message);
    }
}

executeAsyncFunction();