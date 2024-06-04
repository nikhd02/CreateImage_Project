function createDeepCopy(obj) {
    const newObj = Array.isArray(obj) ? [...obj] : { ...obj };
    for (key in newObj) {
        if (typeof (newObj[key]) === 'object')
            newObj[key] = createDeepCopy(newObj[key])
    }

    return newObj;
}

const Joe = {
    name: 'Joe',
    age: 25,
    courses: ['Math', 'English', 'Science'],
    address: {
        city: 'New York',
        country: 'USA'
    }
}

const Roy = createDeepCopy(Joe)
Roy.name = 'Roy'
Joe.address.city = 'Mumbai'
Roy.courses[1] = 'CS'

console.log(Joe)
console.log(Roy)
