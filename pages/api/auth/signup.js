import { hashPassword } from "../../../utils/auth";
import User from "../../../models/User";
import connectDB from "../../../utils/connectDB";

async function handler(req, res) {
  if (req.method !== "POST") return;

  if (req.method == "POST") {
    const { email, telephone, password } = req.body;
    console.log("emailtelephonepassword", email, telephone, password);
    if (!email || !password || !telephone) {
      return res
        .status(422)
        .json({ status: "failes", message: "Inavalid Data" });
    }

    try {
      await connectDB();
    } catch (err) {
      return res
        .status(500)
        .json({ status: "failed", message: "error in connecting to db" });
    }

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(422).json({
        status: "failed",
        message: "user exist",
      });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await User.create({
      email: email,
      telephone: telephone,
      password: hashedPassword,
    });
    console.log("newUser------", newUser);

    res.status(201).json({ status: "success", message: "created user" });
  }
}
export default handler;
