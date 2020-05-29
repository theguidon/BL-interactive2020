import React, { useState } from "react"
import Layout from "../components/layout"
import Map from "../components/Map"
import Admin from "../components/Admin"
import Journalists from "../components/Journalists"
import Ampatuan from "../components/Ampatuan"
import Graph from "../components/Graph"
import "../stylesheets/index.scss"
import AquinoImg from "../images/Aquino.jpg"
import RamosImg from "../images/Ramos.jpg"
import EstradaImg from "../images/Estrada.jpg"
import ArroyoImg from "../images/Arroyo.jpg"
import AquinoIIIImg from "../images/AquinoIII.jpg"
import DuterteImg from "../images/Duterte.jpg"
import coryMap from "../images/coryMap.svg"
import ramosMap from "../images/ramosMap.svg"
import arroyoMap from "../images/arroyoMap.svg"
import estradaMap from "../images/estradaMap.svg"
import noynoyMap from "../images/noynoyMap.svg"
import duterteMap from "../images/duterteMap.svg"


const data = [
  {
    image: AquinoImg,
    name: "Corazon Aquino",
    map: coryMap,
    year: "1986-1992",
    description: "Under Aquino, many rights that were suppressed during Ferdinand Marcos’ military rule were reinstated—including the freedom of the press. Reporters Without Borders said that Aquino was uncomfortable in dealing with the press, but her relationship with the media remained amicable as she was “conscious of the vital role of [the] media in a democracy.” The Center for Media Freedom and Responsibility (CMFR) estimates that at least 21 journalists were killed during Corazon Aquino’s administration. These journalists and the circumstances surrounding their deaths are specified below, as per the CMFR’s reports.",
    desc:
      "The Center for Media Freedom and Responsibility estimates that at least 21 journalists were killed during Corazon Aquino's administration.",
    journalists: [
      {
        name: "Pete Mabazza",
        date: "April 24, 1986",
        place: "Tuguegarao City, Cagayan Province",
        description: "Mabazza, a correspondent of Manila Bulletin, was killed when the Communist Party of the Philippines-New People’s Army ambushed a military convoy in Cagayan Province. He was covering the field operations of the Philippine military when they were caught in the crossfire between the military and guerillas."
      },
      {
        name: "Wilfredo Vicoy",
        date: "April 25, 1986",
        place: "Tuguegarao City, Cagayan Province",
        description: "Vicoy suffered internal bleeding caused by shrapnel wounds a day after the Communist Party of the Philippines-New People’s Army ambushed a military convoy he was riding. Like Mabazza, Vicoy was a photojournalist who covered field operations of the Philippine military against communist guerillas."
      },
      {
        name: "Virgilio Pacala",
        date: "March 24, 1987",
        place: "San Pablo City, Laguna",
        description: "As a correspondent for the Manila Hotline magazine, Pacala was shot in the back of the head by an unknown gunman while riding a jeepney. Shortly before his death, he rebutted Philippine Constabulary Lt. Col. Victor Corpus’ claim that the Plaza Miranda bombing of 1971 was linked to the New People’s Army (NPA). He had also written an expose on the NPA a few days prior to his murder."
      },

      {
        name: "Dionisio Perpetuo Joaquin",
        date: "April 12, 1987",
        place: "Olongapo City, Zambales",
        description: "An associate publisher for the Olongapo-Zambales News Forum, Joaquin was at the Whiskey Bar, across from a restaurant where the workers’ strike he had organized was taking place, when he was shot in his ,sleep. The gunman and his accomplice had been identified as Nicomedes Fabro. Fabro had been hired by Fransisco Dimalanta and Amado Alcala, who were paid off by William Hoge, the owner of the restaurant where the strike Joaquin organized was held. William Hoge and an unidentified accomplice were never arrested and convicted."
      },
      {
        event: "dxRA RADYO NI JUAN MASSACRE",
        name: "Narciso Balani, Rogie Zagado, Leo Palo, and Cesar Maglalang",
        date: "August 27, 1987",
        place: "Davao City",
        description: "Maglalang and his colleagues Balani, Zagado, and Palo were killed in the dxRA radio station by suspected communist rebels. Balani was a radio technician; Zagado, a commentator; Palo, an anti-communist crusader who anchored the program Bantay Bayan Kontra Komunista; and Palo, a defeated congressional candidate and commentator.",
      },
      {
        name: "Martin Castor",
        date: "August 28, 1987",
        place: "Manila",
        description: "Castor was covering a coup attempt as a photojournalist at Pilipino Ngayon when the van he was riding was gunned down by members of a mutinous armed forces faction."
      },
      {
        name: "Ramon Noblejas",
        date: "October 4, 1987",
        place: "Tacloban City, Leyte",
        description: "While working for the Manila Broadcasting Company dyVL Aksyon Radyo, Noblejas was gunned down by four assailants. He was known to report on the military’s involvement in corruption, illegal logging and gambling, and human rights abuses."
      },
      {
        name: "Leo Enriquez III",
        date: "October 10, 1987",
        place: "Cebu City",
        description: "Enriquez was a reporter affiliated with Kyodo news service, Washington Times, and People’s Journal when he was shot in his home. Police suspected communist rebel groups to be responsible, after the National Democratic Front threatened going after military agents pretending to be journalists. Enriquez had been covering the military since 1983, and his family had survived multiple arson attempts from the New People’s Army."
      },
      {
        name: "Noel Miranda",
        date: "March 29, 1988",
        place: "Tagum City, Davao Del Norte",
        description: "As the owner of the Mindanao Scanner, he covered graft and corruption and was known to be actively involved in government efforts to thwart the communist movement. Miranda was shot while walking home."
      },
      {
        name: "Ruben R. Manrique",
        date: "August 12, 1988",
        place: "Balanga City, Bataan",
        description: "Manrique was shot three times as he was boarding his car. He was the owner of the Luzon Tribune and renowned for his hard-hitting coverage of local government officials’ misconduct and gambling operators."
      },
      {
        name: "Josef Aldeguer Nava",
        date: "October 30, 1988",
        place: "Iloilo City",
        description: "Nava was working for Visayan Life Today and dyRP when he was shot in a cab on the way home. His son cited his work as a journalist to be the motivation for his killing. He was then working on an expose of alleged fictitious loans at the Government Service Insurance System. He also covered drug syndicates."
      },
      {
        name: "Severino Arcones",
        date: "October 17, 1989",
        place: "Iloilo City",
        description: "A news anchor at dyFM-Bombo Radyo, Arcones was shot in his home. He hosted a daily segment that tackled matters against the New People’s Army (NPA), having once exposed them to have levied “revolutionary taxes” on businessmen. He had already received threats in the past for his continued attack on the NPA."
      },
      {
        name: "Eddie Telan",
        date: "December 1, 1989",
        place: "Quezon City",
        description: "Telan died after having been critically wounded in his coverage of a failed right-wing coup. He was a newscaster."
      },
      {
        name: "Enrique Lingan",
        date: "February 4, 1990",
        place: "Lucena City, Quezon",
        description: "Lingan was a columnist affiliated with the Luzon Times and the Midway Star. He died of internal hemorrhage after police officer Felipe Navarro beat him up. A heated exchange between the two ensued after Lingan was taken to the precinct, having been prevented from covering a nude show allegedly supported by the police. The exchange then led to Navarro flooring Lingan and the former banging the latter’s head against the concrete floor."
      },
      {
        name: "Joseph “Joe” Kreuger",
        date: "February 6, 1990",
        place: "Pinamalayan, Oriental Mindoro",
        description: "An editor at the Mindoro Weekly Reporter, Kreuger was shot on the way home by an unidentified gunman. Krueger was able to run and the gunman failed at an attempt to shoot him again when barangay tanods and policemen came. He died during operation. He was known as a vocal critic of jueteng operations, having just held a rally a week before his death. In the rally, he named ,top-ranking military men and public officials who were jueteng protectors."
      },
      {
        name: "Reynaldo Catindig Sr.",
        date: "May 15, 1990",
        place: "Tumauini, Isabela",
        description: "Catindig worked for the Northern Sierra Madre Express. While several sources list the time and place of his ,death, there are no other available specifics."
      },
      {
        name: "Jean Ladringan",
        date: "July 8, 1990",
        place: "General Santos City",
        description: "Ladringan, publisher and editor at the Southern Star, was killed together with her husband. Ladringan had recently published a piece which incriminated top Muslim officials at the Mindanao State University of graft and corruption."
      },
      {
        name: "Nesino Paulin Toling",
        date: "April 14, 1991",
        place: "Ozamiz, Misamis Occidental",
        description: "Publisher and editor for the Panguil Bay Monitor, Toling was shot three times in his office by an unknown assailant. He wrote about the arrest of a suspected drug lord in Northern Mindanao, illegal logging & government corruption. He had been receiving death threats prior to his demise."
      }
    ]
  },
  {
    image: RamosImg,
    name: "Fidel V. Ramos",
    map: ramosMap,
    year: "1992-1998",
    description: "Much like Corazon Aquino, Ramos was said to be amicable with the press. Under Ramos, the number of slain journalists notably dropped. The Center for Media Freedom and Responsibility data reveals that 11 journalists were killed during his term, but existing data only names six individuals. The Committee to Protect Journalists (CPJ) also noted that by the end of Ramos’ term, there were a total of 33 journalist deaths since Ferdinand Marcos’ ouster. The following information on the six slain journalists was taken from the CPJ’s reports.",
    desc:
      "The Committee to Protect Journalists database lists six journalists (CPJ) killed under the Ramos administration, but CMFR data reveals at least 11 were killed. The CPJ noted that at the time of the last journalist killed under Fidel Ramos, there had been a total of 33 journalist deaths since Ferdinand Marcos' ourster.",
    journalists: [
      {
        name: "Danilo Vergara",
        date: "July 1, 1992",
        place: "Iligan City",
        description: "He was the publisher of the Philippine Post. He was shot at close range by three anonymous assailants as he was leaving a printing plant. He was known to cover corruption and crime."
      },
      {
        name: "Greg Hapalla",
        date: "September 21, 1992",
        place: "Zamboanga City",
        description: "A radio commentator, he was shot to death by three men while broadcasting for DXAS Your Community Radio station."
      },
      {
        name: "Romeo Lagsapi",
        date: "January 11, 1993",
        place: "Olongapo City, Zambales",
        description: "He covered corruption and was publisher of the Voice of Zambales. He disappeared around January 11, having just filed a countersuit after being charged with criminal libel for a piece he wrote on police corruption. Images of a burnt corpse were shown to Lagaspi, assumed to be Romeo’s."
      },
      {
        name: "Ferdinand Reyes",
        date: "February 13, 1996",
        place: "Dipolog, Zamboanga Del Norte",
        description: "He was gunned down at his desk while he was still serving as Editor-in-Chief of the newspaper Press Freedom. Before he was killed, he frequently covered corruption, wrote about human rights abuses and criticized government policies."
      },
      {
        name: "Danny Hernandez",
        date: "June 3, 1997",
        place: "Manila",
        description: "Known for exposing drug syndicates and police corruption, he was shot inside a taxi on as he was leaving the People’s Journal Tonight office where he was the news editor. It was later revealed that the taxi was stolen earlier for the purposes of anticipating and capturing Hernandez."
      },
      {
        name: "Rey Bancayrin",
        date: "July 30, 1998",
        place: "Zamboanga City",
        description: "While he was on air for Radio DXLL, two unidentified assailants shot him three times in his booth while talking to a listener. He was known for covering local corruption, illegal logging, and drug smugglers."
      }
    ]
  },
  {
    image: EstradaImg,
    name: "Joseph Estrada",
    map: estradaMap,
    year: "1998-2001",
    description: "Estrada was described by Reporters Without Borders as “less tolerant” of the media because he allegedly put pressure on news organizations that were critical of his administration. According to the Center for Media Freedom and Responsibility, Estrada’s brief tenure as president saw at least six journalist murders. Out of the six, only four have been named, based on the Committee to Protect Journalists’ (CPJ) data.",
    desc:
      "According to the Center for Media Freedom and Responsibility, Estrada's brief tenure as president saw 6 journalist murders. The CPJ, however, lists only 4 deaths.",
    journalists: [
      {
        name: "Vincent Rodriguez",
        date: "May 23, 2000",
        place: "Sasmuan, Pampanga",
        description: "Vincent Rodriguez sustained a shot in the leg and a fatal skull fracture when his boat that was part of a convoy was attacked by rebels. The New People’s Army claimed responsibility for the attack but apologized as the police in the convoy were the targets, not the journalist."
      },
      {
        name: "Olimpio Jalapit Jr.",
        date: "November 17, 2000",
        place: "Pagadian City, Zamboanga del Sur",
        description: "Olimpio Jalapit Jr. hosted “Lampornas” for Zamboanga radio station DXPR. Jalapit was frequently sent death threats. He had received a text saying “I will kill you today” on the morning of his death. He was shot in the head by an unidentified gunman. Former Department of Environment and Natural Resources Secretary Antonio Cerilles and wife Representative Aurora Cerilles had filed complaints about Jalapit’s show which was subsequently suspended. Jalapit was killed on the way to meet with Aurora Cerilles. The two have since denied involvement in the murder."
      },
      {
        name: "Ronald Ureta",
        date: "January 3, 2001",
        place: "Aklan Province, Philippines",
        description: "Ronald Ureta was shot less than an hour after leaving the DYKR radio station where he hosted the “Agong Nightwatch.” Ureta was shot by men on motorcycles. It is believed that he was killed as a result of his criticism of the local government and police for their alleged corruption and involvement in the drug trade."
      },
      {
        name: "Mohammad Yusop",
        date: "February 23, 2001",
        place: "Pagadian City, Zamboanga del Sur",
        description: "Mohammad Yusop hosted a religious program on DXID radio station but wasn’t known to comment on controversial topics. Yusop was in a pedicab when he was shot in the head by a gunman from a motorcycle. It is not known if Yusop had received death threats or if the incident was related to his work."
      }

    ]
  },
  {
    image: ArroyoImg,
    name: "Gloria Macapagal Arroyo",
    map: arroyoMap,
    year: "2001-2010",
    description: "Arroyo’s relationship with the press was marred by controversy. Two years into her first term, she created a special task force to investigate journalist murders at the time. However, in her last five years in office, Arroyo attempted to distance herself from the press because of political scandals. Arroyo’s husband, Jose Miguel Arroyo, had also filed many libel cases against journalists, which was part of an anti-press initiative, according to Center for Media Freedom and Responsibility (CMFR) Deputy Director Luis Teodoro. The Arroyo administration also saw the highest number of journalist deaths in a single day as a result of the infamous Ampatuan massacre, more commonly known as the “Maguindanao massacre.” The CMFR reports that there were 83 journalist murders during Arroyo’s nine-year presidency, but only 80 have been named based on data from the Committee to Protect Journalists.",
    desc: `The Arroyo administration saw the highest number of journalist deaths in a single day as a result of the infamour Ampatuan massacre, more popularly known as the "Maguindanao massacre." The Center for Media Freedom and Responsibility claims that there were 83 journalist murders during Arroyo\'s 9-year presidency`,
    journalists: [
      {
        name: "Calendario Cayona",
        date: "May 30, 2001",
        place: "Zamboanga City, Zamboanga del Sur",
        description: "Cayona received four gunshot wounds on his way to work in DXLL, a local radio station, by unidentified male assassins. Cayona was a vocal critic of the local government, military, and armed groups. He had been sent several death threats before his killing, including an on-air threat from the Abu Sayyaf."
      },
      {
        name: "Joy Mortel",
        date: "May 31, 2001",
        place: "Talabanhan, Occidental Mindoro",
        description: "Mortel, a reporter for the Mindanao Guardian, was shot in her home by two unknown assailants after a heated argument. Local police blamed communist rebels for her killing and cited financial dealings with local cooperatives as a likely motive. It is unknown if the murder was related to her work as a journalist."
      },
      {
        name: "Edgar Damalerio",
        date: "May 13, 2002",
        place: "Pagadian City, Zamboanga del Sur",
        description: "Damalerio was an editor for a local newspaper, the Zamboanga Scribe, and a commentator for DXKP, a Zamboanga-based radio station. He frequently covered local corruption and accused the local police chief, Asuri Hawani, of having ties in drug trafficking and criminal syndicates. Damalerio was on his way home from a press conference when he was hit by a gunman. The police identified and charged Ronie Quilme based on eyewitness testimony. Multiple witnesses, however, were killed in the course of the trial. The Supreme Court ordered the case to be moved to Cebu City to avoid influence from local politicians a week later."
      },
      {
        name: "Sonny Alcantara",
        date: "August 22, 2002",
        place: "San Pablo, Laguna",
        description: "Alcantara, a broadcaster for Quo Vadis San Pablo and editor of Kokus, was shot in the head by a lone gunman. Local police chief Ernesto Cuizon acknowledged that Alcantara’s vocal journalism was a factor in the assassination. The case was cold until a suspect was found in 2019."
      },
      {
        name: "Apolinario Pobeda",
        date: "May 17, 2003",
        place: "Lucena City, Quezon",
        description: "Pobeda was shot seven times on the way to work by two unidentified gunmen. Pobeda was known to lambast corrupt local officials in his show on DWTI-AM radio. He was a vocal critic of alleged narco-politician Lucena City Mayor Ramon Talaga. The police apprehended two suspects, Eric and Eulogio Patulay as identified by an eyewitness. The Patulays were reported to be bodyguards of Romano Talaga, Mayor Talaga’s son. A third suspect has yet to be identified and remains at large."
      },
      {
        name: "Bonifacio Gregorio",
        date: "July 8, 2003",
        place: "La Paz, Tarlac",
        description: "Gregorio wrote for Dyaryo Banat and was critical of local officials, including La Paz Mayor Dionisio Manuel. Before his death, Gregorio accused Manuel of building a cemetery that didn’t comply with local regulations. Gregorio was shot in the head thrice at close range outside his house by an unknown gunman."
      },
      {
        name: "Noel Villarante",
        date: "August 19, 2003",
        place: "Santa Cruz, Laguna",
        description: "Villarante was an editor for the Laguna Score and a radio host at DZJV. He had received numerous death threats for his coverage on corruption and drug trafficking. Villarante’s murder was carried out in his house by a gunman. Senando Palumbarit was arrested on August 26, 2003 on the basis of police sketches. Palumbarit, however, denied involvement in the murder and the local press alleged that the arrest was part of a larger conspiracy and cover-up. The case was dismissed in 2006 as none of the witnesses were willing to testify."
      },
      {
        name: "Rico Ramirez",
        date: "August 20, 2003",
        place: "San Francisco, Agusan del Sur",
        description: "Ramirez frequently reported on crime and local politics for DXSF Radio. He was shot once in the back on August 20 but his murder was not publicized by the authorities until September 2. No suspects have been found and apprehended due to the lack of witnesses."
      },
      {
        name: "Juan Pala",
        date: "September 6, 2003",
        place: "Davao City, Davao del Sur",
        description: "Pala had received death threats on multiple occasions for his work on DXGO Radio. He was highly critical of the local government and communist rebels. He was walking home accompanied by his friend and a bodyguard when a gunman opened fire from a motorcycle, sustaining 9 gunshot wounds and dying shortly after. This was not the first attempt on Pala’s life, which came months earlier on April 29. That attack injured Pala, who then started to air his show from home. After his death, President Arroyo ordered the creation of a special police task force to investigate the recent journalist murders."
      },
      {
        name: "Nelson Nadura",
        date: "December 2, 2003",
        place: "Masbate City, Masbate",
        description: "Nadura, a former communist rebel in the New People’s Army, hosted a morning talk show on Radio DYME where he was known to critique local officials. He was shot several times after his show. Nadura was on his motorcycle unidentified gunmen attacked him. The motive behind the murder is still unconfirmed. President Arroyo released a statement the day after the attack and vowed that “attacks against members of the press shall not go unpunished.” As of that statement, none of the over 40 journalist murders since 1986 had been solved."
      },
      {
        name: "Rowell Endrinal",
        date: "February 11, 2004",
        place: "Legazpi City, Albay",
        description: "Endrinal was shot multiple times by two gunmen when he was exercising in the local basketball court. Endrinal was a commentator for DZRC and a columnist for Bicol Metro News, covering issues such as local corruption and criminality. In 2010, two suspects were acquitted, including a police chief with alleged ties to the killing. Clarito Arizobal was identified by a witness as one of the assassins and was convicted on November 26, 2012 and sentenced to reclusion perpetua. A second suspect has yet to be identified and apprehended."
      },
      {
        name: "Rogelio Mariano",
        date: "July 31, 2004",
        place: "Laoag City, Ilocos Norte",
        description: "Mariano, a commentator for Radyo Natin-Aksyon Radyo, was shot several times in the back and head while riding his motorcycle. Mariano’s last broadcast hit illegal gambling operations in Laoag, as well as alleged irregularities in the local electric cooperative’s finances."
      },
      {
        name: "Arnnel Manalo",
        date: "August 5, 2004",
        place: "Bauan, Batangas",
        description: "Manalo was a reporter for Bulgar and DZRH radio, covering mainly local politics and corruption. Manalo was shot three times shortly after bringing his children to school. Michael Garcia was charged for the murder and arrested on August 26, 2004. Garcia was allegedly hired by Edilberto Mendoza, a local politician. The assailant was identified by Manalo’s brother, Apollo, who was also killed. Garcia was killed in custody by police officers in 2009 who claimed the prisoner tried to take the weapon."
      },
      {
        name: "Fernando Consignado",
        date: "August 12, 2004",
        place: "Nagcarlan, Laguna",
        description: "Consignado, a radio host for Radio Veritas, was found dead in his home in Laguna. The motive Consignado’s murder is still unclear. Evidence suggests it came from a land dispute but the killing may be related to some earlier reporting on illegal gambling and corruption."
      },
      {
        name: "Romeo Binungcal",
        date: "September 29, 2004",
        place: "Bataan Province, Philippines",
        description: "Binungcal wrote for Remate and Bulgar, chiefly on corruption. He was shot five times on his motorcycle as he made his way home. It is believed that the attack was ordered by former police officers who were fired as a result of Binungcal’s reports."
      },
      {
        name: "Eldy Sablas",
        date: "October 19, 2004",
        place: "Tandag, Surigao del Sur",
        description: "Sablas was shot thrice in a trike by an unidentified gunman. Police believe the killing was in relation to Sablas’ highly critical reporting on illegal gambling and the drug trade on Radio DXJJR-FM."
      },
      {
        name: "Gene Boyd Lumawag",
        date: "November 12, 2004",
        place: "Jolo, Sulu Province",
        description: "Lumawag was a photographer for MindaNews working on a documentary with another cameraman when he was shot in the head. The motive is unclear but the authorities have suggested three potential motives. It is believed that the Abu Sayyaf was responsible for the killing as the gunman matched the description of an Abu Sayyaf member. The murder may also be linked to a corruption story Lumawag was following. It may also have been a case of mistaken identity as Lumawag may have seemed like a spy."
      },
      {
        name: "Herson Hinolan",
        date: "November 13, 2004",
        place: "Kalibo, Aklan",
        description: "Hinolan was shot multiple times by an unknown assailant. It is believed that his murder was a reprisal for his exposes on illegal activities, police brutality, and corruption."
      },
      {
        name: "Allan Dizon",
        date: "November 27, 2004",
        place: "Cebu City, Cebu Province",
        description: "Dizon was a photographer for The Freeman and a writer for Banat. Dizon was shot twice by an unidentified gunman. It is believed that the killing was in relation to an illegal gambling story by Dizon. The Freeman also received threats against other journalists following Dizon’s death."
      },
      {
        name: "Stephen Omaois",
        date: "November 29, 2004",
        place: "Tabuk, Kalinga",
        description: "Stephen Omaosis was a reporter for a government radio station, DZRK, and a writer for Guru Press. Omaosis was bludgeoned to death and it is unknown if this was in relation to his work."
      },
      {
        name: "Arnulfo Villanueva",
        date: "February 28, 2005",
        place: "Naic, Cavite",
        description: "Villanueva was a columnist for Asian Star Express Balita. He had written about local officials in connection to illegal gamblig, however, the police have not confirmed a motive."
      },
      {
        name: "Marlene Garcia-Esperat",
        date: "March 24, 2005",
        place: "Tacurong, Sultan Kudarat",
        description: "Garcia-Esperat was a columnist for the Mindanao newspaper Midland Review. While having dinner, a gunman entered Esperat’s house and shot her in the head in front of her family. She had previously received death threats and was under protection at the time, however, she let her guards leave early for Easter that day. Esperat was an anti-graft columnist, heavily focusing on corruption. She was said to have made many enemies over her various exposés. His husband claims the murder to be connected to a corruption story about illegal logging that Marlene was working on."
      },
      {
        name: "Klein Cantoneros",
        date: "May 4, 2005",
        place: "Dipolog, Zamboanga del Norte",
        description: "Cantoneros was a radio broadcaster for DXAA-FM. While returning home, he was ambushed by around three gunmen. Cantoneros was known for his hard-hitting commentaries on local officials."
      },
      {
        name: "Philip Agustin",
        date: "May 10, 2005",
        place: "Paltic, Aurora",
        description: "Agustin was an editor for the Starline Times Recorder who was shot in his home. The paper was to release a special edition the following day connecting local officials, including Mayor Jaime Ylarde, to illegal logging operations. Ylarde denied any involvement. Three suspects were identified, one of which was Reynaldo Morete - the gunman. Morete pointed to Ylarde as the gunman. Morete was the only suspect to be apprehended. The mayor was not charged and continues to deny any wrongdoing. "
      },
      {
        name: "Rolando Morales",
        date: "July 3, 2005",
        place: "Polomok, South Cotobato",
        description: "Morales was shot at least 15 times by a group of assailants on motorcycles. Morales’ companion was also injured in the encounter. Local police created a list of possible suspects which included several police officers. Morales hosted programs on DXMD and Radyo Agong. He was known for his reports on illegal drugs, crime, and corruption. His wife, Floreta, reported that Morales had received several death threats."
      },
      {
        name: "Ricardo Uy",
        date: "November 18, 2005",
        place: "Sorsogon City, Sorsogon Province",
        description: "Uy was an announcer for DZRM radio, president of the Media Reporters Association, and a provincial coordinator for the Bayan Muna partylist. Uy was shot outside his house in Sorsogon City. He had received threats before he was murdered. It is still unknown what the motives behind the killing were."
      },
      {
        name: "Roberto Ramos",
        date: "November 20, 2005",
        place: "Cabuyao, Laguna",
        description: "Ramos was a reporter for Katapat and was shot outside a market. Two suspects were apprehended by the police. Ramos had tipped the police on a shop selling pirated merchandise. It is unknown if his death is linked to a story on this."
      },
      {
        name: "George Benaojan",
        date: "December 1, 2005",
        place: "Cebu City, Cebu Province",
        description: "Benaojan was a correspondent for DYBB and Bantay Balita, based in Cebu. A hitman shot Benaojan several times. During the incident, a bystander was injured by a stray bullet. While the motive has yet to be confirmed, the shooting may have been a reprisal for Benaojan’s reporting on alleged corruption within the local customs bureau. He had received multiple death threats before the incident and had survived a prior attempt on his life in August 2004."
      },
      {
        name: "Rolly Cañete",
        date: "January 20, 2006",
        place: "Pagadian City, Zamboanga del Sur",
        description: "Cañete was a broadcaster for three radio stations, two of which were under then-Zamboanga del Sur Governor Aurora Enerio-Cerilles and her husband, Congressman Antonio Cerilles. Cañete was driving home on his motorcycle with his son when two motorcycle-riding gunmen shot him; only his son survived, who positively identified the suspect to be a soldier, Sgt. Herbert Liguan. Cañete worked as the two politicians’ publicist and paid for his radio programs wherein the broadcaster would criticize opponents of his employer."
      },
      {
        name: "Orlando Tapios Mendoza",
        date: "April 4, 2006",
        place: "Tarlac City, Tarlac Province",
        description: "Mendoza was a reporter and editor for local newspapers Tarlac Profile and Tarlac Patrol. He was shot by unidentified gunmen on his way home to Tarlac and was pronounced dead at the scene. Prior to his death, he had worked on and wrote several pieces about land dispute."
      },
      {
        name: "Fernando Batul",
        date: "May 22, 2006",
        place: "Puerto Princessa, Palawan",
        description: "Batul was a radio commentator for stations DZRH and DYPR, as well as a former vice-mayor for Puerto Princesa. Batul, who was driving to work, was shot six times by gunmen on motorcycle. Batul was a staunch critic of the local government and frequently reported on allegations of corruption and nepotism. A month prior to his death, he had received a death threat demanding him to stop his critical broadcasts. Two unexploded grenades were also found in his home. Batul later told the National Bureau of Investigation that he believed local police were behind the threat. More than a week prior to his death, he had criticized Police Officer Aaron Madamay Golifardo for showing a weapon during an argument with a waitress at a karaoke bar. Golifardo was arrested shortly after Batul’s murder after being identified by eyewitnesses. The gunman was acquitted from the charge five years later. Two of Batul’s colleagues who were investigating his murder also fled Palawan after receiving threats."
      },
      {
        name: "Maricel Vigo & George Vigo",
        date: "June 19, 2006",
        place: "Kidapawan City, Cotobato",
        description: "Maricel Vigo was a radio host for a local radio station DXND. Her partner, George Vigo, was a contributor at a church news agency, Union of Catholic Asian News, and an active member at a local non-government organization. The couple were walking home from the local market when two riders-in-tandem shot them around five in the evening. Maricel and George Vigo were previously active in left-wing groups and had made contacts within communist rebel organizations. Prior to the murders, George had received a propaganda video from the NPA which he showed to local officials. According to the couple’s blogspot, they were red-tagged by police as communists two days after their deaths and their murders were attributed to the NPA. George Vigo, however, told several colleagues that he was being followed and had feared that the military or local officials would target him."
      },
      {
        name: "Armando Pace",
        date: "July 18, 2006",
        place: "Digos City, Davao del Sur",
        description: "Pace was a radio commentator for Radyo Ukay DXDS. On his way home, Pace was ambushed by two riders-in-tandem who shot him in the head and chest. Pace was known for his critical commentaries that were usually aimed at local politicians, businessmen, and other officials. A few days after his murder, Joy Anticamara was arrested after being identified by an eyewitness and was sentenced to 17 years in prison for the crime."
      },
      {
        name: "Ponciano Grande",
        date: "December 7, 2006",
        place: "Cabanatuan, Nueva Ecija",
        description: "Grande was a columnist at local weeklies, The Recorder and Nueva Ecija Times, and was the former director of the Nueva Ecija Press Club. Grande was shot five times on his farm by two gunmen who were said to be in their late-teens. Grande’s partner said that he was robbed of Php 174,000 and that her partner did not have any enemies nor wrote on anything controversial."
      },
      {
        name: "Andres Acosta",
        date: "December 20, 2006",
        place: "Batac, Ilocos Norte",
        description: "Acosta was a news reporter for dzJC, a local radio station, and a contributor for a local paper, Northern Light. While coming home from a christmas party, Acosta was stabbed by unidentified assailants; he collapsed and died on his motorcycle while trying to get to the hospital. Acosta mostly covered police stories and often confronted and took rowdy drunkards to the police. Police believe his murder to be unrelated to his work."
      },
      {
        name: "Hernani Pastolero",
        date: "February 27, 2007",
        place: "Shariff Kabunsuan, Sultan Kudarat",
        description: "Pastolero was the Editor-in-Chief of a local newspaper, Lightning Courier. Pastolero was shot two times in the head by an unidentified gunman while he was having coffee outside his house. Police believe his murder to be related to a land dispute as Pastolero did not have any enemies nor wrote on any sensitive topic."
      },
      {
        name: "Carmelo Palacios",
        date: "April 18, 2007",
        place: "Nueva Ecija, Philippines",
        description: "Palacios was a police reporter for DZRB Radyo ng Bayan. His body was found on the side of the road, with a gunshot on the face, a broken jaw, and severe bruises on the body. His cellphone had also been taken, however some cash was left on him. His colleagues refer to him as a very strong investigative reporter and that he had reported on corruption prior to his death."
      },
      {
        name: "Ferdinand Lintuan",
        date: "December 24, 2007",
        place: "Davao City, Davao del Sur",
        description: "Lintuan was a columnist for the regional daily, Sun Star. He had just left an AM Station, DXGO, when he was shot by two motorcycle-riding gunmen. He had recently worked on alleged corruption in a local development project and illegal logging."
      },
      {
        name: "Dennis Cuesta",
        date: "August 4, 2008",
        place: "General Santos City",
        description: "Cuesta was an anchor and program director for DXMD, an affiliate of Radio Mindanao Network. Cuesta was shot multiple times by a rider-in-tandem while on a public street in Gen-San; he died of his injuries five days later. Prior to his death, Cuesta had applied for a firearm license and had requested for police protection. Police also pointed at a person had told Cuesta to stop broadcasting critical remarks of a land dispute case."
      },
      {
        name: "Martin Roxas",
        date: "August 7, 2008",
        place: "Roxas City, Capiz",
        description: "Roxas was an operations head at Radio Mindanao Network. He was on his motorcycle on the way home when he was shot in the back by two men. Roxas had recently reported on a dispute between two local politicians and on a case of misappropriation of funds. On March 2016, the Roxas City Regional Trial Court sentenced Kristian Tan and Joelnel Lastimoso 11 years and 19 years, respectively, for the murder."
      },
      {
        name: "Arecio Padrigao",
        date: "November 17, 2008",
        place: "Gingoog, Misamis Oriental",
        description: "Arecio Padrigao was a commentator for a local radio program, Sayre ang Katilingban (Know the Society), on DXRS, Padrigao was dropping his child off at school outside Bukidnon State University when a motorcycle-riding gunman shot him. Padrigao has been criticizing corruption and illegal loggings in his commentaries."
      },
      {
        name: "Leo Mila",
        date: "December 2, 2008",
        place: "San Roque, Northern Samar",
        description: "Mila was a radio broadcaster for Radyo Natin in San Roque, Samar. He was shot outside the radio station. Prior to his death, he had received death threats which he reported to the police. Mila had recently reported on irregular funding issues on a local highschool."
      },
      {
        name: "Badrodin Abbas",
        date: "January 22, 2009",
        place: "Cotabato, Maguindanao",
        description: "Abbas was a radio commentator for DXCM. While in his minivan, Abbas was shot in the head by a rider-in-tandem. The commentator was known for his critical commentaries, recently talking about a proposed peace deal between the government and the MILF."
      },
      {
        name: "Ernie Rollin",
        date: "February 23, 2009",
        place: "Oroquieta, Misamis Occidental",
        description: "Rollin was a journalist of 10 years and a commentator for DXSY radio. Early in the morning at a gas station, Rollin was shot by two men on a motorcycle. Prior to his death, Rollin had been talking about controversial laws impacting the province. CMFR believe the murder to be related to his work and politics. On May 24 of that year, authorities arrested Juel Jumalon, a former NPA member. The investigation, however, did not reveal the mastermind."
      },
      {
        name: "Jojo Trajano",
        date: "June 3, 2009",
        place: "Taytay, Rizal",
        description: "Trajano was a crime reporter for a local newspaper, Remate. He was killed in a crossfire during a police raid of a drug den in Rizal. Trajano and another police officer were fatally wounded during the operation. "
      },
      {
        name: "Crispin Perez",
        date: "June 9, 2009",
        place: "Occidental Mindoro",
        description: "Perez was a host for a radio station, DWDO. After his morning show, the assailant pretended to seek advice from Perez, after which he stabbed and fatally shot the victim. His widow identified the attacker as a local police official and bodyguard of a local politician. In February 2010, authorities charged police officer Darwin Quimoyog for the murder."
      },
      {
        name: "Godofredo Linao",
        date: "July 27, 2009",
        place: "Barabo, Surigao del sur",
        description: "Linao was the host of a weekly public affairs program, Straight to the Point, on Radyo Natin. Linao was getting on his motorcycle when two gunmen shot him four times. He went to Barabo after receiving a text message which quoted Radyo Natin station manager Mario Alviso. Alviso had received threatening texts after Linao’s murder. "
      },
      {
        name: "Ismael Pasigna",
        date: "December 24, 2009",
        place: "Labason, Zamboanga del Norte",
        description: "Pasigna was an anchor for South Express Balita of B-96 FM. He was on his way to work when an assailant gunned him down. Police and the local mayor believe his murder to be related to an approaching election. Pasigna had also discussed a controversy over a certificate of candidacy prior."
      }
    ]
  },
  {
    image: AquinoIIIImg,
    name: "Benigno Aquino III",
    map: noynoyMap,
    year: "2010-2016",
    description: "Aquino had noted that the media outlets during his time had the tendency to nitpick his administration and after his term, he admitted that he even wanted to control the press at times. This never materialized, and the Aquino administration only called for “fairer media coverage.” Even though the death toll dropped by more than half, Aquino’s administration still posted the second-highest number of media-related killings since Ferdinand Marcos’ ouster. Data collected from the Committee to Protect Journalists and the Center for Media Freedom and Responsibility shows 34 killings.",
    desc:
      "Even though the death toll dropped by more than half, the second Aquino administration still posted the second-highest number of media-related killings since Marcos' ouster with at least 31 slain individuals—though data collected shows 34—based on the Center for Media Freedom and Responsibility's estimates.",
    journalists: [
      {
        name: "Desidario Camangyan",
        date: "June 14, 2010",
        place: "Mati, Davao Oriental",
        description: "Camangyan, an anchor for a local radio station Sunrise FM, was shot in the head during an amateur singing contest in front of an audience which included his wife and 6-year old son. Two suspects were apprehended: Dennis Jess Lumikid, a police officer; and Romeo Antoling, a local village official. Only Lumikid was convicted for the murder. At the time, Camangyan and his co-anchors received threats over their commentaries on illegal logging activities in Davao Oriental."
      },
      {
        name: "Joselito Agustin",
        date: "June 16, 2010",
        place: "Bacarra, Ilocos Norte",
        description: "Agustin was on the way home on the evening of June 15 when two gunmen shot him four times, injuring him and a passenger, his nephew. Agustin died of his injuries the next morning. He was an outspoken on-air critic of corruption in the local politics. On June 21, police filed murder charges against Pacific Velasco, the newly-elected vice mayor of the town, and three other suspects."
      },
      {
        name: "Nestor Bedolido",
        date: "June 19, 2010",
        place: "Digos, Davao del Sur",
        description: "Bedolido was a reporter for a weekly newspaper, the Kastigador. He was buying cigarettes outside a karaoke bar when he was shot by a gunman who fled with an accomplice on a motorcycle. Bedolido was said to have been writing exposés on a local politician in the region. In 2014, four suspects were charged for the writer’s murder, including former Davao del Sur Governor Douglas Ra Cagas and Matanao Mayor Vicente Fernandez."
      },
      {
        name: "Jose Daguio",
        date: "July 4, 2010",
        place: "Tabuk, Kalinga",
        description: "Daguio was a 75-year-old radio commentator, formerly working in DZRK Radyo ng Bayan and DZRH FM. At the time of his death, the victim was reportedly involved in a dispute over a public works project."
      },
      {
        name: "Miguel Belen",
        date: "July 9, 2010",
        place: "Iriga, Camarines Sur",
        description: "Belen, a reporter for radio station dwEB in Nabua, Cam-Sur, was on his way home in Iriga when he was gunned down by two assailants on a motorcycle. Belen was working for a local politician and authorities suspected the murder to be politically-motivated. Two suspects, Eric Vargas and Gina Bagacina, were apprehended. Bagacina was said to be a member of the New People’s Army."
      },
      {
        name: "Edilberto Cruz",
        date: "August 1, 2010",
        place: "Nueva Ecija ",
        description: "Cruz was an editor-publisher of a local paper, Salida. He was riding his motorcycle when he was ambushed by unidentified gunmen. Cruz’s newspaper was mainly reporting about development stories and police have yet to find a clear motive for the killing."
      },
      {
        name: "Edison Falmeniana",
        date: "December 10, 2010",
        place: "Zamboanga del Sur",
        description: "A reporter from Mindanao Inquirer, not much is known or published of the case."
      },
      {
        name: "Gerry Ortega",
        date: "January 24, 2011",
        place: "Puerto Princesa, Palawan",
        description: "A prominent civic leader and former RGMA Network radio host, Ortega was the news anchor of Radyo Mo Nationwide Palawan at the time. He was murdered at an ukay-ukay store in the morning by a lone gunman. The suspect, Marvin Alcaraz, was arrested shortly but claimed that he only intended to rob the victim. Ortega, however, had been receiving death threats through text back then. Ortega was a very staunch critic of the mining activities in Palawan at the time."
      },
      {
        name: "Cirilo Gallardo",
        date: "February 1, 2011",
        place: "Bangued, Abra",
        description: "Gallardo was a radio announcer for a local radio station RZPA Puso ti Abra. His decomposing body was found in a house he stayed near the broadcasting site with 13 stab wounds. His room was found ransacked and his belongings such as laptops were missing. Authorities believe the motive to be robbery."
      },
      {
        name: "Maria Len Flores Somera",
        date: "March 24, 2011",
        place: "Malabon, NCR",
        description: "Somera was a radio broadcaster who discussed and forwarded the issues of callers of her show to officials, often criticizing the government for incompetence. She was shot at the back of the head by a lone gunman who shortly fled the scene in a jeep."
      },
      {
        name: "Romeo Olea",
        date: "June 13, 2011",
        place: "Iriga, Camarines Sur",
        description: "Olea was a radio commentator for DWEB-FM in Iriga. He was shot in the back while riding his motorcycle to work. It was said that he had been receiving death threats shortly prior, and his colleagues and supporters say that Olea, along with Miguel Belen who was killed a year prior, had angered a political clan during the May 2010 elections."
      },
      {
        name: "Neil Aranga Jimena",
        date: "August 23, 2011",
        place: "E.B. Magalona, Negros Occidental",
        description: "Neil Aranga Jimena was a radio anchor, working in Iloilo, Cadiz, and then Radio Mindanao Network. He was killed by two gunmen aboard a motorcycle in Negros Occidental. The National Press Club blames the local warlords and gambling lords for the death of Jimena."
      },
      {
        name: "Antonio “Tony” Silagon",
        date: "December 15, 2011",
        place: "Trinidad, Bohol",
        description: "Silagon was a publisher of the Bohol Balita Daily News. He was gunned down by two assailants in a bus terminal. "
      },
      {
        name: "Christopher Guarin",
        date: "January 5, 2012",
        place: "General Santos City",
        description: "Guarin was a publisher and editor of the daily tabloid Tatak. Guarin was in his car with his wife and daughter when they were ambushed by a rider-in-tandem. He jumped out of the car in order to keep his family from getting hit. The two gunmen caught up and shot him to death. "
      },
      {
        name: "Rommel Palma",
        date: "April 30, 2012",
        place: "Koronodal, South Cotabato",
        description: "Rommel Palma was a driver and radio reporter for Bombo Radyo in Koronadal City. He was shot by four men in front of the South Cotabato Provincial Hospital where he was supposed to gather reports along with a colleague who was inside the hospital."
      },
      {
        name: "Nestor Libaton",
        date: "May 8, 2012",
        place: "Mati, Davao Oriental",
        description: "Libaton was a news reporter for the local Catholic church-owned radio Station DxHM-AM. He was on his motorcycle when a two suspects rider-in-tandem shot him, killing him on the spot. He was with a fellow broadcaster who was riding a separate motorcycle. He was not known to have reported any controversial issues at the time."
      },
      {
        name: "Julius Cauzo",
        date: "November 8, 2012",
        place: "Cabanatuan, Nueva Ecija",
        description: "Cauzo was a host and commentator for a local radio station DWJJ, as well as the Vice President of the Nueva Ecija Press Club. While on his motorcycle, Cauzo was shot by a gunman on another motorcycle. He had received death threats prior and was known for criticizing local politicians."
      },
      {
        name: "Mario Vendiola Baylosis",
        date: "April 22, 2013",
        place: "Kabalasan, Zamboanga Sibugay",
        description: "Baylosis was a radio announcer for Radyo Natin and news correspondent for DXNC-Radyo Suhnan. He was heading home from work in his motorcycle when he was killed by two gunmen on motorcycle. Baylosis died on the way to the hospital from three gunshot wounds on the chest. It is unclear if he covered any controversial topics prior to his death."
      },
      {
        name: "Miguelito Rueras",
        date: "June 2, 2013",
        place: "Pio V. Corpus, Masbate",
        description: "Rueras was a correspondent for dyDD El-Nuevo Bantay Radyo, a local AM radio in Cebu. Rueras was shot three times by a lone gunman in his store in Pio V. Corpuz. He died of a single gunshot wound to the chest. Nothing was stolen from his store, indicating that the motive could be political or media-related."
      },
      {
        name: "Bonifacio Loreto & Richard Kho",
        date: "July 30, 2013",
        place: "Quezon City, NCR",
        description: "Loreto and Kho were columnists for a weekly tabloid, Aksyon Ngayon, which focused on community issues and corruption. Loreto and Kho were in front of a convenience store in Quezon City when a rider-in-tandem gunned-down the two. A friend of the two was also in the scene and had survived by pretending to be dead. Their family members believe the murders to be related to their work as journalists."
      },
      {
        name: "Mario Sy",
        date: "August 1, 2013",
        place: "General Santos City",
        description: "Mario Sy was a freelance photographer who regularly worked for the local newspaper, Sapol News. Sy was murdered in his home when a gunman entered the house and shot him in front of his wife and daughter. The newspaper publisher believed his murder was linked to his contribution to a photo report about illegal drug trade in the area. Authorities from Philippine Drug Enforcement Agency arrested Jerry Intoman, who had links to illegal drug trafficking, as the suspected gunman."
      },
      {
        name: "Fernando Solijon",
        date: "August 29, 2013",
        place: "Iligan City, Lanao del Norte",
        description: "Solijon was a radio commentator for DxLS Love Radio in Iligan. He was a frequent critic of local politicians and, on the day of his death, had just discussed an expensive purchase of a house and car by Iligan city mayor Celso Regencia. An anonymous caller threatened Solijon on air, saying “your coffin’s already made.” On his way home from dinner, Solijon was shot at close range by a rider-in-tandem in various parts, such as the head, shoulder, and abdomen; Solijon was declared dead-on-arrival at the local hospital. The National Bureau of Investigation identified Iligan city police officer P.J. Capangpangan as a suspect to the murders. Another suspect, Edward Tucaran, was shot and killed in unclear circumstances just two days after Solijon’s murder."
      },
      {
        name: "Vergel Bico",
        date: "September 4, 2013",
        place: "Calapan, Oriental Mindoro",
        description: "Bico was a columnist for a weekly tabloid newspaper, Kalahi. He had recently written about illegal gambling in the region. Bico, on his motorcycle going home, was shot twice in the head by two gunmen on a motorcycle"
      },
      {
        name: "Joas Dignos",
        date: "November 29, 2013",
        place: "Valencia City, Bukidnon",
        description: "Dignos was the host of a weekday radio show Bombardier, wherein he often criticized, on-air, local officials who he deemed corrupt. Dignos was shot in the head and chest by two gunmen on motorcycles. Authorities and media groups believed his murder to be related to his political commentaries. In June of that year, a grenade exploded near the station which was airing one of Dignos’ recorded commentaries."
      },
      {
        name: "Michael Diaz Milo",
        date: "December 10, 2013",
        place: "Tandag City, Surigao del Sur",
        description: "Diaz Milo was a radio broadcaster at a local radio station, DXFM, which regularly covered local issues and reports on herbal medicine. Milo was riding his motorcycle on the way home when assailants on motorcycles pulled up alongside him. One gunman shot him in the head. The radio broadcaster had reportedly received anonymous death threats shortly before."
      },
      {
        name: "Rogelio Butalib",
        date: "December 12, 2013",
        place: "Tagum, Davao del Norte",
        description: "Rogelio Butalib was the third journalist to be murdered in the span of two weeks. Butalib hosted a radio show called Ang Kamatuoran (The Truth) which regularly discussed local issues and corruption. The radio host was getting on his motorcycle outside of his radio station when a gunman shot and killed him, fleeing afterward with an accomplice. Butalib regularly received anonymous death threats."
      },
      {
        name: "Richard Najid",
        date: "May 4, 2014",
        place: "Bongao, Tawi-Tawi",
        description: "Najid was a broadcast journalist and acting manager of DXNN PowerMix FM in Bongao. He was returning from a basketball game when three men approached and shot him dead that Sunday evening."
      },
      {
        name: "Nerlita Ledesma",
        date: "January 8, 2015",
        place: "Balanga City, Bataan",
        description: "Ledesma was a radio news anchor for the local radio station Power Radio and a provincial correspondent for the national newspaper tabloid Abante. She was also serving as President of Tagnai Homeowners Associations in the city. Ledesma was gunned-down by a rider-in-tandem near her house, dying from wounds on her chest, legs, arms, and hands. Authorities suspected the murder to be motivated by either land dispute or her work."
      },
      {
        name: "Maurito Lim",
        date: "February 14, 2015",
        place: "Tagbilaran City, Bohol",
        description: "Lim was a “blocktimer,” which meant he leased airtime, of dyRD Station. His broadcast reports usually discussed the involvement of local officials in illegal drug trafficking. Lim had arrived in the station when a gunman shot him in the head and fled the scene on a motorcycle. Authorities also looked into land dispute as a possible motive."
      },
      {
        name: "Gregorio Ybanez",
        date: "August 18, 2015",
        place: "Tagum, Davao del Norte",
        description: "Ybanes was a publisher of a weekly newspaper, Kabuhayan News Services, and president of the Davao del Norte Press and Radio-TV Club. He was also a board director of the power distributor Davao del Norte Electric Cooperative. Ybanez was shot three times in the chest in front of his home. Authorities believe his death to be more connected to his role in the power cooperative, however he has received death threats over his media work before."
      },
      {
        name: "Teodoro Escanilla",
        date: "August 19, 2015",
        place: "Barcelona, Sorsogon",
        description: "Escanilla was an anchor for the radio program Parmana ng Lahi, which regularly discussed human rights issues and criticized the military. He was also the chairman of the local Anakpawis political party and a local spokesman of the rights group Karapatan. Escanilla was gunned-down in front of his house, reportedly speaking with a man just before getting shot."
      },
      {
        name: "Cosme Maestrado",
        date: "August 27, 2015",
        place: "Ozamiz City, Misamis Occidental",
        description: "Maestrado was an anchor for a local radio news program Ratsada, which often discussed political issues and allegations of corruption among local officials. Maestrado was shot in the head by four gunmen in front of a shopping center in the city, being declared dead-on-arrival at the hospital. Prior to his death, the anchor had criticized a local politician about the purchase of construction equipment."
      },
      {
        name: "Elvis Banggoy Ordaniza",
        date: "February 16, 2016",
        place: "Pitogo, Zamboanga del Sur",
        description: "Ordaniza was a broadcast journalist for dxWO Power99 FM in Pitogo. While preparing dinner, Ordaniza was shot twice in the chest with a .45 caliber pistol. The radio journalist had reported on illegal drug trade and illgeal gambling in the town and was a former member of the New People’s Army."
      },
      {
        name: "Alex Bacoba",
        date: "May 27, 2016",
        place: "Manila, NCR",
        description: "Bacoba was a reporter for Brigada News. He was shot in the head in Quiapo by a man who approached him. The gunman fled by motorcycle."
      }
    ]
  },
  {
    image: DuterteImg,
    name: "Rodrigo Duterte",
    map: duterteMap,
    year: "2016 to present",
    description: "A feature of the Rodrigo Duterte presidency has been the crackdown on journalists. On several occasions, Duterte has attacked multiple media outlets critical of him and his administration: He has tagged Rappler as fake news; he has threatened to shut down ABS-CBN; and ever since he took office, there have been over 154 attacks and threats against journalists, and at least 69 have been allegedly been linked to incumbent public officials. Data from the Center for Media Freedom and Responsibility reveals that as of January 25, 2020, 15 journalists have been killed under the Duterte administration. The agency has yet to update its count to 16.",
    desc:
      "A feature of the Duterte presidency has been the crackdown on dissent. With two more years to go in his term, data from several sources reveal at least 14 journalists have been killed under Duterte.",
    journalists: [
      {
        name: "Apolinario Suan Jr.",
        date: "July 14, 2016",
        place: "Bislig, Surigao del Sur",
        description: "Suan was a radio anchor for Real FM in Bislig and provincial board member. He was on his way home when men aboard a van attacked him. His brother died on the spot and Suan, himself, later succumbed to his injuries. Suan had received death threats before his murder and had been strongly criticizing the city’s mayor."
      },
      {
        name: "Larry Que",
        date: "December 19, 2016",
        place: "Virac, Catanduanes",
        description: "Que was a columnist and publisher of the local weekly newspaper, Catanduanes News Now. While entering an office building, Que was shot in the head by a rider-in-tandem. His murder happened shortly after publishing a column he wrote discussing “official negligence” on a recently-raided methamphethamine laboratory. The meth laboratory, which was said to be the largest in the country, was reported to have been established and managed by Chinese nationals. The next year, Que’s wife filed a case against local governor Joseph Cua, police officer Vincent Tacorda, Prince Lim Subion, and two others, for the murder. Que had named Cua as directly involved in the meth laboratory."
      },
      {
        name: "Mario Contaoi ",
        date: "January 6, 2017",
        place: "Magsingal, Ilocos Sur",
        description: "Contaoi was a professor at the University of Northern Philippines and worked for a Catholic church-owned radio station dzNS. He was shot by gunmen on a motorcycle. Advocacy group Kalikasan People’s Network for the Environment believes that his commentaries on the environment’s destruction and militarization of communities that are opposed to mining led to his death."
      },
      {
        name: "Marlon Muyco",
        date: "February 2, 2017",
        place: "M’Lang, Cotabato",
        description: "Muyco was a blocktime radio host of dxND Radyo Bida in Kidapawan, Cotabato. Muyco was with his daughter when a rider-in-tandem shot him and wounded his daughter. Authorities identified one of the suspects as Boyet Patubo, a “gun-for-hire”. "
      },
      {
        name: "Joaquin Briones",
        date: "March 13, 2017",
        place: "Milagros, Masbate",
        description: "Briones was a former radio commentator for a local station and a columnist for the national newspaper tabloid Remate. Briones was shot four times in the back by assailants who fled on a motorcycle. Authorities narrow the motives to political or personal grudges. Colleagues believe his murder was connected to his critical reports on illegal fishing, gambling and the illegal drug trade and that he had earned several enemies. He had also received numerous death threats in the past. In May 2017, police killed Leonardo del Rosario Villaran and two others in a gunfight after they tried to serve a warrant of arrest for him. Del Rosario was a member of the Sako criminal and gun-for-hire gang. They also captured three others during the operation, and arrested one more gang member the following year."
      },
      {
        name: "Michael Marasigan",
        date: "August 3, 2017",
        place: "San Juan, Manila, NCR",
        description: "Marasigan was an editor and journalist for Business World. He was shot dead by a rider-in-tandem along with his brother, who died shortly after from his injuries."
      },
      {
        name: "Rudy Alicaway",
        date: "August 6, 2017",
        place: "Zamboanga del Sur",
        description: "Alicaway was the host of a weekly radio show DXPB. On his way home, Alicaway was shot down by two gunmen on a motorcycle. His colleagues claim he never tackled any controversial issue."
      },
      {
        name: "Leodoro Diaz",
        date: "August 7, 2017",
        place: "President Quirino, Sultan Kudarat",
        description: "Diaz was a reporter for a radio station, dxMY in Cotabato, and a columnist for the tabloid Sapol. On his way to Tacurong city, Diaz was ambushed by motorcycle-riding gunmen. Prior to his murder, he had already received death threats and had been harrassed by armed men near his home. He was also reporting about illegal drugs at the time. Diaz’s family believes his murder is connected to his work, considering his reports on corruption, illegal gambling, and illegal drugs."
      },
      {
        name: "Christopher Lozada",
        date: "October 24, 2017",
        place: "Bislig, Surigao del Sur",
        description: "Lozada was a radio broadcaster for dxBF and was involved in filing charges against Bislig mayor Librado Navarro over the purchase of a Php 14.7-million hydraulic excavator in 2012. Lozada was driving home when gunmen aboard a van shot him, killing him and wounding his wife. A day before, the Office of the Ombudsman had dismissed Bislig mayor Navarro and 11 others over the anomalous purchase. Navarro had also allegedly bribed Lozada, however the latter refused. Lozada had also received death threats prior to his murder."
      },
      {
        name: "Edmund Sestoso",
        date: "April 30, 2018",
        place: "Dumaguete, Negros Oriental",
        description: "Sestoso was a radio host for dyGB 91.7 FM and former chairman of the National Union of Journalists in the Philippines Dumaguete chapter. Sestoso was going home when a ridier-in-tandem shot him, hitting him five times. He later died in hospital. Sestoso had received death threats prior, and informed a relative that someone was out to kill him just hours before."
      },
      {
        name: "Carlos Matas",
        date: "May 12, 2018",
        place: "Labangan, Zamboanga del Sur",
        description: "Matas was a retired soldier and host of a local radio station dxCA. In the afternoon of May 12, he was gunned down by assailants. Four days prior, he was also ambushed, reporting it to the authorities. Matas tackled various issues on the radio, such as gambling, corruption, illegal drugs, and the harassment of farmers. "
      },
      {
        name: "Dennis Denora",
        date: "June 7, 2018",
        place: "Panabo City, Davao del Norte",
        description: "Denora was a publisher and reporter of a weekly newspaper, Trends and Times. A gunman shot Denora, who was in his car, hitting him with multiple gunshots to the head and killing him instantly. The assailant escaped on foot. Denora’s murderer was  identified the following year as Richard Posas Bolastig. Though Denora did not receive any death threats nor had enemies, The Presidential Task Force on Media Security identified the murder as being related to his work."
      },
      {
        name: "Eduardo Dizon",
        date: "July 10, 2019",
        place: "Kidapawan City, Cotabato",
        description: "Dizon was a radio broadcaster and anchor for Brigada News FM. On his way home, two assailants on a motorcycle shot Dizon five times in his car, killing him on the spot. Dizon had received death threats prior to the attack, believing that it could be related to his critical reporting of an alleged investment scam."
      },
      {
        name: "Joey Llana",
        date: "July 20, 2018",
        place: "Darga City, Albay",
        description: "Llana was a reporter for Home Radio Legaspi and host of radio program Metrobanat. While driving to work, two gunmen opened fire on Llana 14 times with the reporter sustaining shots to the head and body. He was declared dead at the scene. The next year, murder charges were filed against Erwin Talagtag, a member of the Concepcion Criminal Group. Authorities believe his murder to be connected to his work as a journalist."
      }
    ]
  },
]

const IndexPage = () => {
  const [president, setPresident] = useState(0)

  function Corazon() {
    return setPresident(0)
  }
  function Ramos() {
    return setPresident(1)
  }
  function Estrada() {
    return setPresident(2)
  }
  function Arroyo() {
    return setPresident(3)
  }
  function Aquino() {
    return setPresident(4)
  }
  function Duterte() {
    return setPresident(5)
  }

  return (
    <Layout>
      <div className="heading">
        <h1>Under Fire</h1>
        <div id="red-line" />
        <h2>By Pioee B. Bassig, Derick M. Gabrillo and George Kho</h2>
      </div>
      <h4>
        The Philippines is among the most dangerous countries for journalists. Only a handful of other countries compare to it in this regard. According to the Committee to Protect Journalists, “the countries with the highest media impunities represent both conflict-ridden and more stable regions where criminal groups, politicians, government officials, and other powerful actors resort to violence to silence critical and investigative reporting.”
    </h4>
      <h4>
        The following are the names of those who have been silenced—though some remain unnamed—ever since Ferdinand Marcos’ autocratic regime had been supplanted with the return of democracy.
    </h4>
      <Map data={data[president]} />
      <Admin {...{ data, setPresident, president, Corazon, Ramos, Estrada, Arroyo, Aquino, Duterte }} />
      <Journalists journalists={data[president].journalists} />
      {
        president === 3 ? <Ampatuan /> : null
      }
      <Graph />
    </Layout>
  )
}

export default IndexPage