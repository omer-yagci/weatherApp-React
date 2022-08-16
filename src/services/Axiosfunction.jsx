import {
  toastErrorNotify,
  toastSuccessNotify,
  toastWarnNotify,
} from "../helpers/Toastify";
import axios from "axios";

export const getDataFromAPI = async (URL, datas, country, setDatas) => {
  if (country === "") {
    toastErrorNotify("Required field cannot left blank");
  } else {
    try {
      const { data } = await axios.get(URL);
      const { id, name } = data;

      const checkCity = datas.some((weatherCard) => weatherCard.id === id);
      if (checkCity) {
        toastWarnNotify(
          ` ${name}  Already exist.Please enter another city name..`
        );
      } else {
        const {
          id,
          name,
          sys: { country },
          weather: {
            0: { description, icon },
          },
          main: { temp },
        } = data;
        setDatas([{ id, name, country, description, icon, temp }, ...datas]);

        toastSuccessNotify("Valid DATA");
      }
    } catch (error) {
      toastWarnNotify(`${country}  not found!`);
    }
  }
};
