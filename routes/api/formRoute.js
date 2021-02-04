const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const Form = require("../../models/Form");

// @route    POST api/form/add-form
// @desc     Subit a form
// @access   Public
router.post("/", async (req, res) => {
  try {
    const {
      type,
      label,
      fullName,
      monthlyPayment,
      adress,
      negothiablePayment,
      poneNumber,
      pdl,
      city,
      pce,
      postalCode,
      email,
      consomEstimation,
    } = req.body;

    let form = new Form({
      type,
      label,
      fullName,
      monthlyPayment,
      adress,
      negothiablePayment,
      poneNumber,
      pdl,
      city,
      pce,
      postalCode,
      email,
      consomEstimation,
    });

    await form.save();

    let offer = await Form.findById(form._id);

    async function main() {
      // Generate test SMTP service account from ethereal.email
      // Only needed if you don't have a real mail account for testing
      let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.ionos.fr",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "offre@agent-comparateur.fr", // generated ethereal user
          pass: "Test321321+", // generated ethereal password
        },
      });

     

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "Kompar <offre@agent-comparateur.fr>", // sender address
        to: email, // list of receivers
        subject: "Offre de souscription à un contrat d'énérgie", // Subject line
        // text: message , // plain text body
        html: `
        <p>Cher ${fullName}</p>
        <p>Vous venez d’effectuer une simulation de consommation pour un nouveau contrat de fourniture d’énergie par téléphone il y a quelques instants</p>
        <h5>Cliquer ici <a href="http://localhost:3000/offer/${offer._id}">Offre de souscription</a> </h5>
        <p>Nous vous remercions de votre confiance et nous nous réjouissons de vous compter bientôt parmi nos nouveaux clients !Cordialement</p>
        <p>À très bientôt, Votre conseiller Kompar.</p>
        `, // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

    res.status(200).json(form);
  } catch (error) {
    res.status(500).json({ msg: "Server Error" });
  }
});

// @route    POST api/form/add-form
// @desc     Subit a form
// @access   Public
router.get("/:id", async (req, res) => {
  try {
    let offer = await Form.findById(req.params.id);
    res.json(offer);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
