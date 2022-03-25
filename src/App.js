import './App.css';
import {
  createStyles,
  makeStyles,
  Typography,
  Link,
  Grid,
} from '@material-ui/core'
import React from "react";
import swiftUI from "./swift-ui.png"
import uiKit from "./ui-kit.png"
import reactNative from "./react-native.png"
import figma from "./figma.png"
import martinique from "./martinique.png"
import epitech from "./epitech.png"
import mac from "./mac.png"
import iPad from "./iPad.png"
import iPhone from "./iPhone.png"
import me from "./me.png"
import phone from "./phone.png"
import iosBackground from "./ios-background.png"

const useStyle = makeStyles(
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
    header: {
      marginTop: 50,
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    headerTitle: {
      fontSize: 55,
      fontWeight: "bold"
    },
    headerSubtitle: {
      fontSize: 25,
    },
    mobileImage: {
      width: "50%"
    },
    mainSubtitleContainer: {
      display: "flex",
      alignItems: "start",
      marginBottom: 20,
    },
    mainSubtitle: {
      fontSize: 30,
      fontWeight: "bold"
    },
    aboutContainer: {
      display: "flex",
      flexDirection: "row",
      width: "80%",
      marginTop: 60,
      marginBottom: 30,
      justifyContent: "space-between",
    },
    aboutParagraph: {
      width: "54%",
      textAlign: "start",
      padding: 20,
      backgroundColor: "#F6F6F6",
      borderRadius: 30
    },
    contactContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "50%"
    },
    itemContainer: {
      display: "flex",
      flexDirection: "column",
      width: 200,
      height: 125,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
    },
    martiniqueItem: {
      backgroundImage: `url(${martinique})`,
    },
    phoneContainer: {
      display: "flex",
      flexDirection: "row",
      height: 55,
      width: 200,
      backgroundColor: "#F6F6F6",
    },
    phoneText: {
      paddingLeft: 10,
      fontSize: 20,
      fontWeight: "bold",
      color: "#0CD219"
    },
    epitechItem: {
      backgroundColor: "#005AA7",
    },
    iosDevContainer: {
      width: 260,
      height: 125,
      backgroundImage: `url(${iosBackground})`,
    },
    iosDevText: {
      fontSize: 60,
      color: "white",
      fontWeight: "bold",
      lineHeight: 1,
    },
    toolsContainer: {
      display: "flex",
      flexDirection: "column",
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "space-around",
      backgroundColor: "#F6F6F6"
    },
    macBookContainer: {
      width: 175,
      height: 125,
    },
    iPadContainer: {
      width: 150,
      height: 125,
    },
    iPhoneContainer: {
      width: 130,
      height: 125,
    },
    meContainer: {
      width: 200,
      height: 200,
    },
    martiniqueText: {
      fontSize: 30,
      color: "white",
      fontWeight: "bold"
    },
    skillsContainer: {
      display: "flex",
      flexDirection: "row",
      width: "80%",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    skillContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "49%",
      backgroundColor: "#F6F6F6",
      borderRadius: 30,
      paddingTop: 20,
      paddingBottom: 20,
    },
    skillTitle: {
      fontSize: 30,
    },
    skillContent: {
      textAlign: "start",
      marginTop: 10,
    },
  })
)

function App() {
  const styles = useStyle();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography className={styles.headerTitle}>Mattéo Fauchon</Typography>
        <Typography className={styles.headerSubtitle}>Développeur iOS </Typography>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutParagraph}>
          <div className={styles.mainSubtitleContainer}>
            <Typography className={styles.mainSubtitle}>À propos</Typography>
          </div>
          <Typography style={{marginBottom: 20}}>Passioné par le développement mobile, j'ai commencé par créer mes premières
            application en React Native.</Typography>
          <Typography style={{marginBottom: 20}}>J'ai poursuivi mon apprentissage avec Flutter.</Typography>
          <Typography style={{marginBottom: 20}}>Découvert par la suite de développement natif et le Swift/SwiftUI, j'en suis vite tombé amoureux.</Typography>
          <Typography style={{marginBottom: 20}}>Je créer et développe toutes mes applications sur Figma, ce qui m'a permis d'acquérir une casquette de designer amateur.</Typography>
          <Typography style={{marginBottom: 50}}>J'ai passé 4 ans à EPITECH, j'ai pu apprendre de nombreux langages tel que: C, C++, JavaScript / TypeScript, Flutter, Python, mySQL.</Typography>
          <div className={styles.contactContainer}>
            <Link style={{color: "#007AFF"}} href={"https://twitter.com/FauchonMatteo"}>Twitter</Link>
            <Link style={{color: "#007AFF"}} href={"https://www.linkedin.com/in/mattéo-fauchon/"}>Linkedin</Link>
            <Link style={{color: "#007AFF"}} href={"https://github.com/Matttx"}>GitHub</Link>
          </div>
        </div>
        <div style={{width: "41%"}}>
          <Grid container spacing={1}>
            <Grid item xs={0}>
              <div className={`${styles.itemContainer} ${styles.meContainer}`}>
                <img src={me} style={{width: 200}}/>
              </div>
            </Grid>
            <Grid item xs={0} style={{display: "flex", flexDirection: "column", justifyContent: "space-around"}}>
              <div className={`${styles.itemContainer} ${styles.martiniqueItem}`}>
                <Typography className={styles.martiniqueText}>Martinique</Typography>
              </div>
              <div className={`${styles.itemContainer} ${styles.phoneContainer}`}>
                <img src={phone} style={{width: 20, height: 20}}/>
                <Typography className={styles.phoneText}>07 81 04 14 92</Typography>
              </div>
            </Grid>
            <Grid item xs={0}>
              <div className={`${styles.toolsContainer} ${styles.macBookContainer}`}>
                <Typography>MacBook Pro 13”</Typography>
                <img src={mac} style={{width: 120}}/>
              </div>
            </Grid>
            <Grid item xs={0}>
              <div className={`${styles.toolsContainer} ${styles.iPadContainer}`}>
                <Typography>iPad Pro 12.9”</Typography>
                <img src={iPad} style={{width: 100}}/>
              </div>
            </Grid>
            <Grid item xs={0}>
              <div className={`${styles.toolsContainer} ${styles.iPhoneContainer}`}>
                <Typography>iPhone 13 Pro</Typography>
                <img src={iPhone} style={{width: 40}}/>
              </div>
            </Grid>
            <Grid item xs={0}>
              <div className={`${styles.itemContainer} ${styles.epitechItem}`}>
                <img src={epitech} style={{width: 170}}/>
              </div>
            </Grid>
            <Grid item xs={0}>
              <div className={`${styles.itemContainer} ${styles.iosDevContainer}`}>
                <Typography className={styles.iosDevText}>iOS</Typography>
                <Typography style={{color: "white", fontSize: 20}}>Developer</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div style={{width: "80%"}}>

      </div>
      <div style={{width: "80%", marginTop: 70}}>
        <div className={styles.mainSubtitleContainer}>
          <Typography className={styles.mainSubtitle}>Compétences</Typography>
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <img src={swiftUI}/>
          <Typography className={styles.skillTitle}>Swift UI</Typography>
          <div className={styles.skillContent}>
            <li>Forte connaissance du langage</li>
            <li>Utilisation des notifications</li>
            <li>Intégration de Plan personnalisé</li>
            <li>Utilisation quotidienne d’APIs</li>
            <li>Utilisation du MVVM design pattern</li>
            <li>Utilisation des animations</li>
          </div>
        </div>
        <div className={styles.skillContainer}>
          <img src={uiKit}/>
          <Typography className={styles.skillTitle}>UI Kit</Typography>
          <div className={styles.skillContent}>
            <li>Forte connaissance du langage</li>
            <li>Utilisation des notifications</li>
            <li>Formation Udemy (Angela YU)</li>
            <li>Utilisation quotidienne d’APIs</li>
            <li>Utilisation du MVC design pattern</li>
            <li>Utilisation des animations</li>
          </div>
        </div>
      </div>
      <div className={styles.skillsContainer}>
        <div className={styles.skillContainer}>
          <img src={reactNative}/>
          <Typography className={styles.skillTitle}>React Native</Typography>
          <div className={styles.skillContent}>
            <li>Forte connaissances du Framework</li>
            <li>Création d'application type n8n / Zaapier</li>
            <li>Utilisation de TypeScript</li>
            <li>Utilisation quotidienne d’APIs</li>
            <li>Utilisation du BLoC pattern</li>
            <li>Utilisation des animations</li>
          </div>
        </div>
        <div className={styles.skillContainer}>
          <img src={figma}/>
          <Typography className={styles.skillTitle}>Figma</Typography>
          <div className={styles.skillContent}>
            <li>Forte connaissances du logiciel</li>
            <li>Forte connaissances du design iOS</li>
            <li>Forte connaissances du design Android</li>
            <li>Connaissances globales des bases du design</li>
          </div>
        </div>
      </div>
      <div style={{width: "80%", marginTop: 70}}>
        <div className={styles.mainSubtitleContainer}>
          <Typography className={styles.mainSubtitle}></Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
