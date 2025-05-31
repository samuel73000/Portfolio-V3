"use client";
import "../styles/home.css";
import TypewriterText from "../components/typewriterText";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <section>
      <main>
        {/*!!!!!!!!!!!!!!!!!!! HERO!!!!!!!!!!!!!! */}
        <section className='hero'>
          <div className='gradient-hero'></div>
          <img src='/me.png' alt='Hero Image' />
          <div div className='container-hero-text'>
            <svg
              className='svg-fleche-hero'
              xmlns='http://www.w3.org/2000/svg'
              width='122'
              height='118'
              viewBox='0 0 122 118'
              fill='none'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M22.4098 82.3962C22.4098 82.3962 22.4097 82.3963 22.5406 82.4697C22.612 82.6016 22.612 82.6016 22.612 82.6016L22.6194 82.5976L22.6419 82.5855L22.7304 82.5382C22.8083 82.4967 22.9232 82.436 23.071 82.3588C23.3665 82.2044 23.7933 81.9845 24.3184 81.7225C25.3686 81.1985 26.8109 80.5067 28.3798 79.8349C29.9492 79.1628 31.6423 78.5121 33.1948 78.0693C34.753 77.6248 36.1485 77.3961 37.1322 77.5499L37.1785 77.2535C36.1259 77.089 34.6764 77.3347 33.1125 77.7808C31.5429 78.2285 29.8369 78.8846 28.2617 79.5591C26.6859 80.2339 25.2381 80.9284 24.1844 81.4541C23.6575 81.717 23.229 81.9378 22.932 82.0929C22.9252 82.0964 22.9185 82.0999 22.9118 82.1034C22.9569 82.0199 23.0076 81.9253 23.0634 81.8204C23.3077 81.3614 23.6489 80.7059 24.0373 79.9196C24.8138 78.3475 25.78 76.2499 26.5355 74.1525C27.2892 72.0603 27.8407 69.9487 27.7722 68.356C27.7379 67.5586 27.5475 66.871 27.1285 66.3832C26.7048 65.8901 26.0675 65.6243 25.1923 65.6328L25.1952 65.9328C26.0048 65.9249 26.5483 66.1683 26.9009 66.5787C27.2582 66.9946 27.4396 67.6049 27.4725 68.3689C27.5383 69.8989 27.0053 71.9631 26.2533 74.0508C25.5031 76.1333 24.5424 78.2197 23.7684 79.7867C23.3815 80.5699 23.0416 81.2227 22.7986 81.6795C22.677 81.9079 22.5797 82.0873 22.5128 82.2096C22.4794 82.2707 22.4535 82.3175 22.4361 82.3489L22.4163 82.3845L22.4098 82.3962ZM22.5406 82.4697L22.612 82.6016L22.1564 82.8481L22.4098 82.3962L22.5406 82.4697Z'
                fill='white'
              />
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M60.8032 46.1122C47.9197 53.0561 36.4217 62.8131 29.4708 74.0643L29.7261 74.2219C36.6424 63.0267 48.0951 53.3023 60.9455 46.3763C73.7959 39.4504 88.03 35.3303 100.5 35.3303V35.0303C87.9696 35.0303 73.6867 39.1684 60.8032 46.1122Z'
                fill='white'
              />
            </svg>
            <p className='text-hero-1'>
              Bonjour ! Je suis<span className='span-hero-texte'>Samuel Pouard</span>
            </p>
            <p className='text-hero-2'>Un développeur front-end passionné</p>
            <h1 className='hero-title-1'>
              Qui soigne chaque détail de{" "}
              <span className='span-hero-texte'>l’interface</span> ...
            </h1>
            <svg
              className='svg-cercle-hero'
              xmlns='http://www.w3.org/2000/svg'
              width='189'
              height='61'
              viewBox='0 0 189 61'
              fill='none'>
              <path
                d='M92.0103 2.29732C117.923 0.146646 141.632 1.42663 159.009 5.22283C167.701 7.12163 174.78 9.64424 179.756 12.6612C184.743 15.6853 187.523 19.1444 187.834 22.8914C188.145 26.6385 185.974 30.5093 181.553 34.3143C177.143 38.1102 170.576 41.7645 162.316 45.0702C145.802 51.6793 122.63 56.8501 96.7164 59.0008C70.8031 61.1515 47.095 59.8715 29.7175 56.0753C21.0258 54.1765 13.9464 51.6548 8.97072 48.6379C3.98326 45.6137 1.2037 42.1538 0.892707 38.4067C0.581826 34.6597 2.75303 30.7897 7.17361 26.9848C11.5839 23.1888 18.1505 19.5336 26.4104 16.2279C42.9243 9.6189 66.0971 4.448 92.0103 2.29732Z'
                stroke='white'
              />
            </svg>
            <p className='text-hero-3'>
              Parce que si l’apparence ne donne pas envie, pourquoi cliquer ?
            </p>
          </div>
        </section>
        <section className='container-hero-2'>
          <div div className='container-hero-text-2'>
            <h2 className='hero-title-2'>
              {" "}
              <TypewriterText />{" "}
            </h2>
            <p className='text-hero-4'>
  Actuellement, je suis développeur front-end freelance. Retrouvez-moi sur
  <a href='https://www.linkedin.com/in/samuel-pouard/' target='_blank' rel='noopener noreferrer'>
    {" "}
    <img src='/linkedin.png' alt='logo linkedin' /> LinkedIn
  </a>
  .
</p>
            <p className='text-hero-5'>
              Développeur front-end autodidacte, je conçois des sites web modernes et performants depuis plus de 3 ans.  
  Mon objectif : créer des expériences numériques sur mesure, à la fois utiles pour les utilisateurs et efficaces pour les entreprises.
            </p>
          </div>
        </section>
        {/* !!!!!!!!!!!!!!!!!!!!!!!!!WORK!!!!!!!!!!!!!!!! */}

        <section className='work'>
  <h2 className='work-title'>Mes projets</h2>
  <div className='gradient-work'></div>
  <div className='container-all-work'>

    <div className='container-work'>
      <img src='/work1.png' alt='aperçu projet' />
      <div className='container-work-text'>
        <h3>Site vitrine pour une entreprise locale</h3>
        <p>
          Conception d’un site responsive et optimisé SEO pour améliorer la visibilité d’une entreprise artisanale sur le web.
        </p>
      </div>
    </div>

    <div className='container-work'>
      <img src='/work2.png' alt='aperçu projet' />
      <div className='container-work-text'>
        <h3>Landing page marketing</h3>
        <p>
          Développement d’une page de vente performante avec animations CSS et formulaire de contact entièrement fonctionnel.
        </p>
      </div>
    </div>

    <div className='container-work'>
      <img src='/work3.png' alt='aperçu projet' />
      <div className='container-work-text'>
        <h3>Portfolio personnel</h3>
        <p>
          Réalisation de mon propre site pour présenter mes compétences, projets et faciliter la prise de contact avec les clients.
        </p>
      </div>
    </div>

    <div className='container-work'>
      <img src='/work4.png' alt='aperçu projet' />
      <div className='container-work-text'>
        <h3>Blog WordPress personnalisé</h3>
        <p>
          Création d’un thème WordPress sur mesure pour un blog professionnel avec une interface d’administration simple.
        </p>
      </div>
    </div>

  </div>
</section>

        {/* !!!!!!!!!!!!!!!!!!!!!!!!!WORK2!!!!!!!!!!!!!!!! */}
        <section className='work2'>
          <h3 className='work-title-2'>
                Je cherche actuellement à rejoindre une équipe <span>pluridisciplinaire</span>

          </h3>
          <p className='work-subtile'>
                qui valorise l'amélioration de la vie des utilisateurs grâce à un design accessible et performant.

          </p>
          <img src='/skill.png' />
        </section>
        {/* !!!!!!!!!!!!!!!!!!!Example !!!!!!!!!!!!!!!*/}
        <section className='example'>
          <div className='container-all-example-1'>
            <div className='container-example'>
              <div className='container-example-text-1'>
                <p className='example-subtitle'>Featured Project</p>
                <h3 className='example-title'>Example of my work</h3>
                <p className='example-text-1'>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
              <img src='/Screenshot1.png' />
            </div>
          </div>

          <div className='container-all-example-2'>
            <div className='container-example'>
              <img src='/Screenshot1.png' />
              <div className='container-example-text-2'>
                <p className='example-subtitle'>Featured Project</p>
                <h3 className='example-title'>Example of my work</h3>
                <p className='example-text-2'>
                  A web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* !!!!!!!!!!!!!!!!!!!Contact !!!!!!!!!!!!!!!*/}
        <section className='contact'>
          <h3 className='contact-title'>Contact</h3>
<p className='contact-subtitle'>
  Je suis actuellement à la recherche d'une équipe pluridisciplinaire qui partage la volonté d'améliorer la vie des utilisateurs grâce à un design accessible.  
  Vous avez un projet en tête ? Contactons-nous !
</p>
         <Button
  className='contact-button'
  variant='contained'
  onClick={() => setOpen(!open)}
  sx={{
    backgroundColor: "#9857d3",
    marginTop: "100px",
    marginBottom: "100px",
    "&:hover": {
      backgroundColor: "#7a46b1",
    },
  }}
>
  {open ? "Fermer le formulaire" : "Me contacter"}
</Button>

<form
  name='contact'
  method='POST'
  data-netlify='true'
  netlify
  className={open ? "form-visible" : "form-hidden"}
>
  {/* Nécessaire pour le parsing du formulaire par Netlify */}
  <input type='hidden' name='form-name' value='contact' />

  <TextField
    type='text'
    label='Votre nom'
    name='name'
    fullWidth
    margin='normal'
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "white" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
      "& .MuiInputLabel-root": { color: "white" },
      "& .MuiInputBase-input": { color: "white" },
    }}
  />

  <TextField
    label='Votre email'
    name='email'
    type='email'
    fullWidth
    margin='normal'
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "white" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
      "& .MuiInputLabel-root": { color: "white" },
      "& .MuiInputBase-input": { color: "white" },
    }}
  />

  <TextField
    type='text'
    label='Votre message'
    name='message'
    multiline
    rows={4}
    fullWidth
    margin='normal'
    sx={{
      "& .MuiOutlinedInput-root": {
        "& fieldset": { borderColor: "white" },
        "&:hover fieldset": { borderColor: "white" },
        "&.Mui-focused fieldset": { borderColor: "white" },
      },
      "& .MuiInputLabel-root": { color: "white" },
      "& .MuiInputBase-input": { color: "white" },
    }}
  />

  <Button
    type='submit'
    variant='outlined'
    sx={{
      marginTop: "1rem",
      borderColor: "#7a46b1",
      color: "#fff",
      "&:hover": {
        borderColor: "#9857d3",
        backgroundColor: "rgba(122, 70, 177, 0.1)",
      },
    }}
  >
    Envoyer
  </Button>
</form>

        </section>
      </main>
    </section>
  );
}
// /* , texte , responsive  , les svg bouges ,  */
