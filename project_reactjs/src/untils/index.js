const infor = localStorage.getItem("infor");

export const nameInfor = infor ? JSON.parse(infor) : null;