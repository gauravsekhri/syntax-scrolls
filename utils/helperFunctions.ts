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
