import { text, image, barcodes } from "@pdfme/schemas";
import { generate } from "@pdfme/generator";

export const cetak1 = async (
  {
    photo,
    fullname,
    email,
    Experience,
    experience1a,
    experience1b,
    experience1c,
    experience1d,
    experience2a,
    experience2b,
    experience2c,
    experience2d,
    experience3a,
    experience3b,
    experience3c,
    experience3d,
  } = {
    photo:
      "data:image/png;base64,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",
    fullname: "Ricky Indra Gunawan",
    email: "rickyindra006@gmail.com",
    Experience: "Experience",
    experience1a: "NoLimit Indonesia",
    experience1b: "Frontend Developer",
    experience1c: "January 2023 - Present (1 year 8 months)",
    experience1d:
      "- Maintaining Nolimit Dashboard\n- Adding features\n- Build a custom dashboard for clients",
    experience2a: "NoLimit Indonesia",
    experience2b: "Frontend Developer",
    experience2c: "January 2023 - Present (1 year 8 months)",
    experience2d:
      "- Maintaining Nolimit Dashboard\n- Adding features\n- Build a custom dashboard for clients",
    experience3a: "NoLimit Indonesia",
    experience3b: "Frontend Developer",
    experience3c: "January 2023 - Present (1 year 8 months)",
    experience3d:
      "- Maintaining Nolimit Dashboard\n- Adding features\n- Build a custom dashboard for clients",
  },
) => {
  const template = {
    schemas: [
      {
        photo: {
          type: "image",
          content:
            "data:image/png;base64,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",
          position: {
            x: 10.31,
            y: 34.73,
          },
          width: 40,
          height: 40,
          rotate: 0,
          opacity: 1,
          required: false,
          readOnly: false,
        },
        fullname: {
          type: "text",
          content: "Ricky Indra Gunawan",
          position: {
            x: 9.52,
            y: 80.97,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        email: {
          type: "text",
          content: "rickyindra006@gmail.com",
          position: {
            x: 10,
            y: 97.32,
          },
          width: 45,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        Experience: {
          type: "text",
          content: "Experience",
          position: {
            x: 76.2,
            y: 34.39,
          },
          width: 111.41,
          height: 10,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience1a: {
          type: "text",
          content: "NoLimit Indonesia",
          position: {
            x: 76.67,
            y: 52.59,
          },
          width: 111.41,
          height: 5.5,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience1b: {
          type: "text",
          content: "Frontend Developer",
          position: {
            x: 76.65,
            y: 60.73,
          },
          width: 111.41,
          height: 6.29,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience1c: {
          type: "text",
          content: "January 2023 - Present (1 year 8 months)",
          position: {
            x: 76.65,
            y: 68.62,
          },
          width: 111.41,
          height: 6.56,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience1d: {
          type: "text",
          content:
            "- Maintaining Nolimit Dashboard\n- Adding features\n- Build a custom dashboard for clients",
          position: {
            x: 75.85,
            y: 77.84,
          },
          width: 111.41,
          height: 17.4,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience2a: {
          type: "text",
          content: "NoLimit Indonesia",
          position: {
            x: 76.35,
            y: 102.81,
          },
          width: 111.41,
          height: 5.5,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience2b: {
          type: "text",
          content: "Frontend Developer",
          position: {
            x: 76.33,
            y: 110.95,
          },
          width: 111.41,
          height: 6.29,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience2c: {
          type: "text",
          content: "January 2023 - Present (1 year 8 months)",
          position: {
            x: 76.33,
            y: 118.84,
          },
          width: 111.41,
          height: 6.56,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience2d: {
          type: "text",
          content:
            "- Maintaining Nolimit Dashboard\n- Adding features\n- Build a custom dashboard for clients",
          position: {
            x: 75.53,
            y: 128.06,
          },
          width: 111.41,
          height: 17.4,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience3a: {
          type: "text",
          content: "NoLimit Indonesia",
          position: {
            x: 76.3,
            y: 155.14,
          },
          width: 111.41,
          height: 5.5,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience3b: {
          type: "text",
          content: "Frontend Developer",
          position: {
            x: 76.28,
            y: 163.28,
          },
          width: 111.41,
          height: 6.29,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience3c: {
          type: "text",
          content: "January 2023 - Present (1 year 8 months)",
          position: {
            x: 76.28,
            y: 171.17,
          },
          width: 111.41,
          height: 6.56,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
        experience3d: {
          type: "text",
          content:
            "- Maintaining Nolimit Dashboard\n- Adding features\n- Build a custom dashboard for clients",
          position: {
            x: 75.48,
            y: 180.39,
          },
          width: 111.41,
          height: 17.4,
          rotate: 0,
          alignment: "left",
          verticalAlignment: "top",
          fontSize: 13,
          lineHeight: 1,
          characterSpacing: 0,
          fontColor: "#000000",
          backgroundColor: "",
          opacity: 1,
          strikethrough: false,
          underline: false,
          required: false,
          readOnly: false,
          fontName: "Roboto",
        },
      },
    ],
    basePdf:
      "data:application/pdf;base64,JVBERi0xLjYKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+CnN0cmVhbQp4nDPQM1Qo5ypUMFAw0DMwslAwtTTVMzI3VbAwMdSzMDNUKErlCtdSyOMKVAAAtxIIrgplbmRzdHJlYW0KZW5kb2JqCgozIDAgb2JqCjUwCmVuZG9iagoKNSAwIG9iago8PAo+PgplbmRvYmoKCjYgMCBvYmoKPDwvRm9udCA1IDAgUgovUHJvY1NldFsvUERGL1RleHRdCj4+CmVuZG9iagoKMSAwIG9iago8PC9UeXBlL1BhZ2UvUGFyZW50IDQgMCBSL1Jlc291cmNlcyA2IDAgUi9NZWRpYUJveFswIDAgNTk1LjMwMzkzNzAwNzg3NCA4NDEuODg5NzYzNzc5NTI4XS9Hcm91cDw8L1MvVHJhbnNwYXJlbmN5L0NTL0RldmljZVJHQi9JIHRydWU+Pi9Db250ZW50cyAyIDAgUj4+CmVuZG9iagoKNCAwIG9iago8PC9UeXBlL1BhZ2VzCi9SZXNvdXJjZXMgNiAwIFIKL01lZGlhQm94WyAwIDAgNTk1LjMwMzkzNzAwNzg3NCA4NDEuODg5NzYzNzc5NTI4IF0KL0tpZHNbIDEgMCBSIF0KL0NvdW50IDE+PgplbmRvYmoKCjcgMCBvYmoKPDwvVHlwZS9DYXRhbG9nL1BhZ2VzIDQgMCBSCi9PcGVuQWN0aW9uWzEgMCBSIC9YWVogbnVsbCBudWxsIDBdCi9MYW5nKGVuLVVTKQo+PgplbmRvYmoKCjggMCBvYmoKPDwvQ3JlYXRvcjxGRUZGMDA1NzAwNzIwMDY5MDA3NDAwNjUwMDcyPgovUHJvZHVjZXI8RkVGRjAwNEMwMDY5MDA2MjAwNzIwMDY1MDA0RjAwNjYwMDY2MDA2OTAwNjMwMDY1MDAyMDAwMzcwMDJFMDAzMz4KL0NyZWF0aW9uRGF0ZShEOjIwMjQwODI4MjMwOTE2KzA3JzAwJyk+PgplbmRvYmoKCnhyZWYKMCA5CjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDIzNCAwMDAwMCBuIAowMDAwMDAwMDE5IDAwMDAwIG4gCjAwMDAwMDAxNDAgMDAwMDAgbiAKMDAwMDAwMDQwMiAwMDAwMCBuIAowMDAwMDAwMTU5IDAwMDAwIG4gCjAwMDAwMDAxODEgMDAwMDAgbiAKMDAwMDAwMDUyNiAwMDAwMCBuIAowMDAwMDAwNjIyIDAwMDAwIG4gCnRyYWlsZXIKPDwvU2l6ZSA5L1Jvb3QgNyAwIFIKL0luZm8gOCAwIFIKL0lEIFsgPDZDQUIyM0VDN0VBMDMwRDg2QjI1RDc4QUMwOTc1MDhDPgo8NkNBQjIzRUM3RUEwMzBEODZCMjVENzhBQzA5NzUwOEM+IF0KL0RvY0NoZWNrc3VtIC8yODI5RjgyMzZGMDZGNDYzOTc3RkQ2OTk4MkQ2ODZFQQo+PgpzdGFydHhyZWYKNzk2CiUlRU9GCg==",
    pdfmeVersion: "4.0.0",
  };
  const plugins = { text, image, qrcode: barcodes.qrcode };
  const inputs = [
    {
      photo,
      fullname,
      email,
      Experience,
      experience1a,
      experience1b,
      experience1c,
      experience1d,
      experience2a,
      experience2b,
      experience2c,
      experience2d,
      experience3a,
      experience3b,
      experience3c,
      experience3d,
    },
  ];

  const pdf = await generate({ template, plugins, inputs });

  // Node.js
  // fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);

  // Browser
  const blob = new Blob([pdf.buffer], { type: "application/pdf" });
  window.open(URL.createObjectURL(blob));
};
