export const getAndroidVersion = async (storeURL = '') => {
    if (!storeURL.match(/^https?:\/\/play\.google\.com\/store\/apps\/details\?id=[0-9a-zA-Z.]+/)) {
        throw new Error('androidStoreURL is invalid.');
    }
    const response = await fetch(storeURL).then((r) => {
        if (r.status === 200) {
            return r.text();
        }
        throw new Error('androidStoreURL is invalid.');
    });


    // console.log('responsexx', response)

    // const matches = response.match(/\[\[\[['"]((\d+\.)+\d+)['"]\]\],/);
    const matches = response.match(/\([0-9]+\),/g);
    if (!matches) {
        throw new Error("can't get android app version.");
    }
    // return matches[1];
    // console.log('matchesxx', matches)
    
    return String(matches[1].slice(1, -2))
};
