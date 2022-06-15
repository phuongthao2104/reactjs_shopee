const infor = localStorage.getItem("userData");

export const nameInfor = infor ? JSON.parse(infor) : null;