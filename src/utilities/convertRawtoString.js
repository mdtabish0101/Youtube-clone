export const convertRawtoString = (labelValue, isSub = false) => {

    if (!labelValue) return "0";
    const num = Math.abs(Number(labelValue));
    if (num >= 1e9) return (num / 1e9).toFixed(0) + "B";
    if (num >= 1e6) return (num / 1e6).toFixed(0) + "M";
    if (num >= 1e3) return (num / 1e3).toFixed(isSub ? 2:0) + "K";
    return num.toString();
};


// Chat gpt
// export const convertRawtoString = (raw) => {
//     if (!raw) return "0";
//     const num = parseInt(raw, 10);
//     if (num >= 1e9) return (num / 1e9).toFixed(1) + "B";
//     if (num >= 1e6) return (num / 1e6).toFixed(1) + "M";
//     if (num >= 1e3) return (num / 1e3).toFixed(1) + "K";
//     return num.toString();
// };

