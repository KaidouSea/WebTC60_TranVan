
exports.myDate = () => {
    const birthday = new Date('1997-07-31')
    const day = birthday.getDate()
    const month = birthday.getMonth() + 1
    const year = birthday.getFullYear()
    return `${year}/${month}/${day}`;
}
