import multer, { StorageEngine } from 'multer';
import path from 'path';
import { Request } from 'express';

// Set up storage configuration
const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists or create it
  },
  filename: (req: Request, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    const baseName = path.basename(file.originalname, ext);
    cb(null, `${baseName}-${uniqueSuffix}${ext}`);
  },
});

// Optional: Filter file types (e.g., only images)
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
): void => {
  const allowedTypes = /jpeg|jpg|png/;
  const extName = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = allowedTypes.test(file.mimetype);

  if (extName && miimport nodemailer from "nodemailer";
  import { otpHTMLBody } from "../utils/otpUtils.js";


  const mailTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: String(process.env.EMAIL_ID),
      pass: String(process.env.EMAIL_PASSWD)
    }
  });


  export const sendMail = async (
      email: string,
      subject: string,
      body: string
  ): Promise<boolean> => {
    try {
      const mail = {
        from: String(process.env.EMAIL_ID),
        to: email,
        subject,
        html: body,
      };

      await new Promise<void>((resolve, reject) => {
        mailTransport.sendMail(mail, (err, info) => {
          if (err) {
            console.error('SendMail Error:', err);
            return reject(err); // better to reject with error
          }
          resolve();
        });
      });

      return true;
    } catch (error) {
      console.log('Error in Send Mail Config:', error);
      return false;
    }
  };

export default upload;
