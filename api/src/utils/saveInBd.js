import SalaModel from "../models/sala.js";

const saveInBd = async (message) => {
  try {
    console.log(message.hora);
    const user = await SalaModel.findByIdAndUpdate(
      {
        _id: message.idSala,
      },
      { $push: { other: { user: message.user.name, message: message.message,hora:message.hora } } }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export { saveInBd };