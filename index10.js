function endpoint1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Data from endpoint 1' });
        }, 1000);
    });
}

function endpoint2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Data from endpoint 2' });
        }, 1500);
    });
}

function endpoint3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ data: 'Data from endpoint 3' });
        }, 2000);
    });
}


async function fetchDataFromAPIs() {
    try {
        const [data1, data2, data3] = await Promise.all([endpoint1(), endpoint2(), endpoint3()]);
        return {
            endpoint1: data1.data,
            endpoint2: data2.data,
            endpoint3: data3.data
        };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}


fetchDataFromAPIs().then((result) => {
    console.log(result);
}).catch((error) => {
    console.error('Error:', error);
});
