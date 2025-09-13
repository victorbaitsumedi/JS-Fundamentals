const MyNumber = parseInt(process.argv[2]);

if (isNaN(MyNumber)) {
    console.log("Not a number");
} else {
    console.log("My number: " + MyNumber);
}

