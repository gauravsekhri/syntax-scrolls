export const getRouteLink = (sentence: string) => {
  try {
    if (sentence && sentence?.length > 0) {
      const cleanedText = sentence
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, " ")
        .toLowerCase();

      const dashSeparatedText = cleanedText.split(" ").join("-");

      return dashSeparatedText;
    } else {
      return sentence ?? "-";
    }
  } catch (err: any) {
    console.log(err);
    return sentence ?? "-";
  }
};

export const getInitials = (name: any) => {
  try {
    if (!name) return "";
    return name
      .match(/(\b\S)?/g)
      .join("")
      .match(/(^\S|\S$)?/g)
      .join("");
  } catch (err: any) {
    console.log(err.message);
    return name;
  }
};

export const formatPostDate = (payload: string) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const inputDate: any = new Date(payload);

  if (!payload || payload?.length == 0 || isNaN(inputDate)) {
    return "-";
  }

  const day = inputDate.getDate();
  const monthIndex = inputDate.getMonth();
  const year = inputDate.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
};

export const makeid = (length: number) => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};
