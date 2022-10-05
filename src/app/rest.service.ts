import { AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {


  flagsList = [{ "id": 4, "name": "Afghanistan", "alpha2": "af", "alpha3": "afg" },
  { "id": 248, "name": "Åland Islands", "alpha2": "ax", "alpha3": "ala" },
  { "id": 8, "name": "Albania", "alpha2": "al", "alpha3": "alb" },
  { "id": 12, "name": "Algeria", "alpha2": "dz", "alpha3": "dza" },
  { "id": 16, "name": "American Samoa", "alpha2": "as", "alpha3": "asm" },
  { "id": 20, "name": "Andorra", "alpha2": "ad", "alpha3": "and" },
  { "id": 24, "name": "Angola", "alpha2": "ao", "alpha3": "ago" },
  { "id": 660, "name": "Anguilla", "alpha2": "ai", "alpha3": "aia" },
  { "id": 10, "name": "Antarctica", "alpha2": "aq", "alpha3": "ata" },
  { "id": 28, "name": "Antigua and Barbuda", "alpha2": "ag", "alpha3": "atg" },
  { "id": 32, "name": "Argentina", "alpha2": "ar", "alpha3": "arg" },
  { "id": 51, "name": "Armenia", "alpha2": "am", "alpha3": "arm" },
  { "id": 533, "name": "Aruba", "alpha2": "aw", "alpha3": "abw" },
  { "id": 36, "name": "Australia", "alpha2": "au", "alpha3": "aus" },
  { "id": 40, "name": "Austria", "alpha2": "at", "alpha3": "aut" },
  { "id": 31, "name": "Azerbaijan", "alpha2": "az", "alpha3": "aze" },
  { "id": 44, "name": "Bahamas", "alpha2": "bs", "alpha3": "bhs" },
  { "id": 48, "name": "Bahrain", "alpha2": "bh", "alpha3": "bhr" },
  { "id": 50, "name": "Bangladesh", "alpha2": "bd", "alpha3": "bgd" },
  { "id": 52, "name": "Barbados", "alpha2": "bb", "alpha3": "brb" },
  { "id": 112, "name": "Belarus", "alpha2": "by", "alpha3": "blr" },
  { "id": 56, "name": "Belgium", "alpha2": "be", "alpha3": "bel" },
  { "id": 84, "name": "Belize", "alpha2": "bz", "alpha3": "blz" },
  { "id": 204, "name": "Benin", "alpha2": "bj", "alpha3": "ben" },
  { "id": 60, "name": "Bermuda", "alpha2": "bm", "alpha3": "bmu" },
  { "id": 64, "name": "Bhutan", "alpha2": "bt", "alpha3": "btn" },
  { "id": 68, "name": "Bolivia (Plurinational State of)", "alpha2": "bo", "alpha3": "bol" },
  { "id": 535, "name": "Bonaire, Sint Eustatius and Saba", "alpha2": "bq", "alpha3": "bes" },
  { "id": 70, "name": "Bosnia and Herzegovina", "alpha2": "ba", "alpha3": "bih" },
  { "id": 72, "name": "Botswana", "alpha2": "bw", "alpha3": "bwa" },
  { "id": 74, "name": "Bouvet Island", "alpha2": "bv", "alpha3": "bvt" },
  { "id": 76, "name": "Brazil", "alpha2": "br", "alpha3": "bra" },
  { "id": 86, "name": "British Indian Ocean Territory", "alpha2": "io", "alpha3": "iot" },
  { "id": 96, "name": "Brunei Darussalam", "alpha2": "bn", "alpha3": "brn" },
  { "id": 100, "name": "Bulgaria", "alpha2": "bg", "alpha3": "bgr" },
  { "id": 854, "name": "Burkina Faso", "alpha2": "bf", "alpha3": "bfa" },
  { "id": 108, "name": "Burundi", "alpha2": "bi", "alpha3": "bdi" },
  { "id": 132, "name": "Cabo Verde", "alpha2": "cv", "alpha3": "cpv" },
  { "id": 116, "name": "Cambodia", "alpha2": "kh", "alpha3": "khm" },
  { "id": 120, "name": "Cameroon", "alpha2": "cm", "alpha3": "cmr" },
  { "id": 124, "name": "Canada", "alpha2": "ca", "alpha3": "can" },
  { "id": 136, "name": "Cayman Islands", "alpha2": "ky", "alpha3": "cym" },
  { "id": 140, "name": "Central African Republic", "alpha2": "cf", "alpha3": "caf" },
  { "id": 148, "name": "Chad", "alpha2": "td", "alpha3": "tcd" },
  { "id": 152, "name": "Chile", "alpha2": "cl", "alpha3": "chl" },
  { "id": 156, "name": "China", "alpha2": "cn", "alpha3": "chn" },
  { "id": 162, "name": "Christmas Island", "alpha2": "cx", "alpha3": "cxr" },
  { "id": 166, "name": "Cocos (Keeling) Islands", "alpha2": "cc", "alpha3": "cck" },
  { "id": 170, "name": "Colombia", "alpha2": "co", "alpha3": "col" },
  { "id": 174, "name": "Comoros", "alpha2": "km", "alpha3": "com" },
  { "id": 178, "name": "Congo", "alpha2": "cg", "alpha3": "cog" },
  { "id": 180, "name": "Congo, Democratic Republic of the", "alpha2": "cd", "alpha3": "cod" },
  { "id": 184, "name": "Cook Islands", "alpha2": "ck", "alpha3": "cok" },
  { "id": 188, "name": "Costa Rica", "alpha2": "cr", "alpha3": "cri" },
  { "id": 384, "name": "Côte d'Ivoire", "alpha2": "ci", "alpha3": "civ" },
  { "id": 191, "name": "Croatia", "alpha2": "hr", "alpha3": "hrv" },
  { "id": 192, "name": "Cuba", "alpha2": "cu", "alpha3": "cub" },
  { "id": 531, "name": "Curaçao", "alpha2": "cw", "alpha3": "cuw" },
  { "id": 196, "name": "Cyprus", "alpha2": "cy", "alpha3": "cyp" },
  { "id": 203, "name": "Czechia", "alpha2": "cz", "alpha3": "cze" },
  { "id": 208, "name": "Denmark", "alpha2": "dk", "alpha3": "dnk" },
  { "id": 262, "name": "Djibouti", "alpha2": "dj", "alpha3": "dji" },
  { "id": 212, "name": "Dominica", "alpha2": "dm", "alpha3": "dma" },
  { "id": 214, "name": "Dominican Republic", "alpha2": "do", "alpha3": "dom" },
  { "id": 218, "name": "Ecuador", "alpha2": "ec", "alpha3": "ecu" },
  { "id": 818, "name": "Egypt", "alpha2": "eg", "alpha3": "egy" },
  { "id": 222, "name": "El Salvador", "alpha2": "sv", "alpha3": "slv" },
  { "id": 226, "name": "Equatorial Guinea", "alpha2": "gq", "alpha3": "gnq" },
  { "id": 232, "name": "Eritrea", "alpha2": "er", "alpha3": "eri" },
  { "id": 233, "name": "Estonia", "alpha2": "ee", "alpha3": "est" },
  { "id": 748, "name": "Eswatini", "alpha2": "sz", "alpha3": "swz" },
  { "id": 231, "name": "Ethiopia", "alpha2": "et", "alpha3": "eth" },
  { "id": 238, "name": "Falkland Islands (Malvinas)", "alpha2": "fk", "alpha3": "flk" },
  { "id": 234, "name": "Faroe Islands", "alpha2": "fo", "alpha3": "fro" },
  { "id": 242, "name": "Fiji", "alpha2": "fj", "alpha3": "fji" },
  { "id": 246, "name": "Finland", "alpha2": "fi", "alpha3": "fin" },
  { "id": 250, "name": "France", "alpha2": "fr", "alpha3": "fra" },
  { "id": 254, "name": "French Guiana", "alpha2": "gf", "alpha3": "guf" },
  { "id": 258, "name": "French Polynesia", "alpha2": "pf", "alpha3": "pyf" },
  { "id": 260, "name": "French Southern Territories", "alpha2": "tf", "alpha3": "atf" },
  { "id": 266, "name": "Gabon", "alpha2": "ga", "alpha3": "gab" },
  { "id": 270, "name": "Gambia", "alpha2": "gm", "alpha3": "gmb" },
  { "id": 268, "name": "Georgia", "alpha2": "ge", "alpha3": "geo" },
  { "id": 276, "name": "Germany", "alpha2": "de", "alpha3": "deu" },
  { "id": 288, "name": "Ghana", "alpha2": "gh", "alpha3": "gha" },
  { "id": 292, "name": "Gibraltar", "alpha2": "gi", "alpha3": "gib" },
  { "id": 300, "name": "Greece", "alpha2": "gr", "alpha3": "grc" },
  { "id": 304, "name": "Greenland", "alpha2": "gl", "alpha3": "grl" },
  { "id": 308, "name": "Grenada", "alpha2": "gd", "alpha3": "grd" },
  { "id": 312, "name": "Guadeloupe", "alpha2": "gp", "alpha3": "glp" },
  { "id": 316, "name": "Guam", "alpha2": "gu", "alpha3": "gum" },
  { "id": 320, "name": "Guatemala", "alpha2": "gt", "alpha3": "gtm" },
  { "id": 831, "name": "Guernsey", "alpha2": "gg", "alpha3": "ggy" },
  { "id": 324, "name": "Guinea", "alpha2": "gn", "alpha3": "gin" },
  { "id": 624, "name": "Guinea-Bissau", "alpha2": "gw", "alpha3": "gnb" },
  { "id": 328, "name": "Guyana", "alpha2": "gy", "alpha3": "guy" },
  { "id": 332, "name": "Haiti", "alpha2": "ht", "alpha3": "hti" },
  { "id": 334, "name": "Heard Island and McDonald Islands", "alpha2": "hm", "alpha3": "hmd" },
  { "id": 336, "name": "Holy See", "alpha2": "va", "alpha3": "vat" },
  { "id": 340, "name": "Honduras", "alpha2": "hn", "alpha3": "hnd" },
  { "id": 344, "name": "Hong Kong", "alpha2": "hk", "alpha3": "hkg" },
  { "id": 348, "name": "Hungary", "alpha2": "hu", "alpha3": "hun" },
  { "id": 352, "name": "Iceland", "alpha2": "is", "alpha3": "isl" },
  { "id": 356, "name": "India", "alpha2": "in", "alpha3": "ind" },
  { "id": 360, "name": "Indonesia", "alpha2": "id", "alpha3": "idn" },
  { "id": 364, "name": "Iran (Islamic Republic of)", "alpha2": "ir", "alpha3": "irn" },
  { "id": 368, "name": "Iraq", "alpha2": "iq", "alpha3": "irq" },
  { "id": 372, "name": "Ireland", "alpha2": "ie", "alpha3": "irl" },
  { "id": 833, "name": "Isle of Man", "alpha2": "im", "alpha3": "imn" },
  { "id": 376, "name": "Israel", "alpha2": "il", "alpha3": "isr" },
  { "id": 380, "name": "Italy", "alpha2": "it", "alpha3": "ita" },
  { "id": 388, "name": "Jamaica", "alpha2": "jm", "alpha3": "jam" },
  { "id": 392, "name": "Japan", "alpha2": "jp", "alpha3": "jpn" },
  { "id": 832, "name": "Jersey", "alpha2": "je", "alpha3": "jey" },
  { "id": 400, "name": "Jordan", "alpha2": "jo", "alpha3": "jor" },
  { "id": 398, "name": "Kazakhstan", "alpha2": "kz", "alpha3": "kaz" },
  { "id": 404, "name": "Kenya", "alpha2": "ke", "alpha3": "ken" },
  { "id": 296, "name": "Kiribati", "alpha2": "ki", "alpha3": "kir" },
  { "id": 408, "name": "Korea (Democratic People's Republic of)", "alpha2": "kp", "alpha3": "prk" },
  { "id": 410, "name": "Korea, Republic of", "alpha2": "kr", "alpha3": "kor" },
  { "id": 414, "name": "Kuwait", "alpha2": "kw", "alpha3": "kwt" },
  { "id": 417, "name": "Kyrgyzstan", "alpha2": "kg", "alpha3": "kgz" },
  { "id": 418, "name": "Lao People's Democratic Republic", "alpha2": "la", "alpha3": "lao" },
  { "id": 428, "name": "Latvia", "alpha2": "lv", "alpha3": "lva" },
  { "id": 422, "name": "Lebanon", "alpha2": "lb", "alpha3": "lbn" },
  { "id": 426, "name": "Lesotho", "alpha2": "ls", "alpha3": "lso" },
  { "id": 430, "name": "Liberia", "alpha2": "lr", "alpha3": "lbr" },
  { "id": 434, "name": "Libya", "alpha2": "ly", "alpha3": "lby" },
  { "id": 438, "name": "Liechtenstein", "alpha2": "li", "alpha3": "lie" },
  { "id": 440, "name": "Lithuania", "alpha2": "lt", "alpha3": "ltu" },
  { "id": 442, "name": "Luxembourg", "alpha2": "lu", "alpha3": "lux" },
  { "id": 446, "name": "Macao", "alpha2": "mo", "alpha3": "mac" },
  { "id": 450, "name": "Madagascar", "alpha2": "mg", "alpha3": "mdg" },
  { "id": 454, "name": "Malawi", "alpha2": "mw", "alpha3": "mwi" },
  { "id": 458, "name": "Malaysia", "alpha2": "my", "alpha3": "mys" },
  { "id": 462, "name": "Maldives", "alpha2": "mv", "alpha3": "mdv" },
  { "id": 466, "name": "Mali", "alpha2": "ml", "alpha3": "mli" },
  { "id": 470, "name": "Malta", "alpha2": "mt", "alpha3": "mlt" },
  { "id": 584, "name": "Marshall Islands", "alpha2": "mh", "alpha3": "mhl" },
  { "id": 474, "name": "Martinique", "alpha2": "mq", "alpha3": "mtq" },
  { "id": 478, "name": "Mauritania", "alpha2": "mr", "alpha3": "mrt" },
  { "id": 480, "name": "Mauritius", "alpha2": "mu", "alpha3": "mus" },
  { "id": 175, "name": "Mayotte", "alpha2": "yt", "alpha3": "myt" },
  { "id": 484, "name": "Mexico", "alpha2": "mx", "alpha3": "mex" },
  { "id": 583, "name": "Micronesia (Federated States of)", "alpha2": "fm", "alpha3": "fsm" },
  { "id": 498, "name": "Moldova, Republic of", "alpha2": "md", "alpha3": "mda" },
  { "id": 492, "name": "Monaco", "alpha2": "mc", "alpha3": "mco" },
  { "id": 496, "name": "Mongolia", "alpha2": "mn", "alpha3": "mng" },
  { "id": 499, "name": "Montenegro", "alpha2": "me", "alpha3": "mne" },
  { "id": 500, "name": "Montserrat", "alpha2": "ms", "alpha3": "msr" },
  { "id": 504, "name": "Morocco", "alpha2": "ma", "alpha3": "mar" },
  { "id": 508, "name": "Mozambique", "alpha2": "mz", "alpha3": "moz" },
  { "id": 104, "name": "Myanmar", "alpha2": "mm", "alpha3": "mmr" },
  { "id": 516, "name": "Namibia", "alpha2": "na", "alpha3": "nam" },
  { "id": 520, "name": "Nauru", "alpha2": "nr", "alpha3": "nru" },
  { "id": 524, "name": "Nepal", "alpha2": "np", "alpha3": "npl" },
  { "id": 528, "name": "Netherlands", "alpha2": "nl", "alpha3": "nld" },
  { "id": 540, "name": "New Caledonia", "alpha2": "nc", "alpha3": "ncl" },
  { "id": 554, "name": "New Zealand", "alpha2": "nz", "alpha3": "nzl" },
  { "id": 558, "name": "Nicaragua", "alpha2": "ni", "alpha3": "nic" },
  { "id": 562, "name": "Niger", "alpha2": "ne", "alpha3": "ner" },
  { "id": 566, "name": "Nigeria", "alpha2": "ng", "alpha3": "nga" },
  { "id": 570, "name": "Niue", "alpha2": "nu", "alpha3": "niu" },
  { "id": 574, "name": "Norfolk Island", "alpha2": "nf", "alpha3": "nfk" },
  { "id": 807, "name": "North Macedonia", "alpha2": "mk", "alpha3": "mkd" },
  { "id": 580, "name": "Northern Mariana Islands", "alpha2": "mp", "alpha3": "mnp" },
  { "id": 578, "name": "Norway", "alpha2": "no", "alpha3": "nor" },
  { "id": 512, "name": "Oman", "alpha2": "om", "alpha3": "omn" },
  { "id": 586, "name": "Pakistan", "alpha2": "pk", "alpha3": "pak" },
  { "id": 585, "name": "Palau", "alpha2": "pw", "alpha3": "plw" },
  { "id": 275, "name": "Palestine, State of", "alpha2": "ps", "alpha3": "pse" },
  { "id": 591, "name": "Panama", "alpha2": "pa", "alpha3": "pan" },
  { "id": 598, "name": "Papua New Guinea", "alpha2": "pg", "alpha3": "png" },
  { "id": 600, "name": "Paraguay", "alpha2": "py", "alpha3": "pry" },
  { "id": 604, "name": "Peru", "alpha2": "pe", "alpha3": "per" },
  { "id": 608, "name": "Philippines", "alpha2": "ph", "alpha3": "phl" },
  { "id": 612, "name": "Pitcairn", "alpha2": "pn", "alpha3": "pcn" },
  { "id": 616, "name": "Poland", "alpha2": "pl", "alpha3": "pol" },
  { "id": 620, "name": "Portugal", "alpha2": "pt", "alpha3": "prt" },
  { "id": 630, "name": "Puerto Rico", "alpha2": "pr", "alpha3": "pri" },
  { "id": 634, "name": "Qatar", "alpha2": "qa", "alpha3": "qat" },
  { "id": 638, "name": "Réunion", "alpha2": "re", "alpha3": "reu" },
  { "id": 642, "name": "Romania", "alpha2": "ro", "alpha3": "rou" },
  { "id": 643, "name": "Russian Federation", "alpha2": "ru", "alpha3": "rus" },
  { "id": 646, "name": "Rwanda", "alpha2": "rw", "alpha3": "rwa" },
  { "id": 652, "name": "Saint Barthélemy", "alpha2": "bl", "alpha3": "blm" },
  { "id": 654, "name": "Saint Helena, Ascension and Tristan da Cunha", "alpha2": "sh", "alpha3": "shn" },
  { "id": 659, "name": "Saint Kitts and Nevis", "alpha2": "kn", "alpha3": "kna" },
  { "id": 662, "name": "Saint Lucia", "alpha2": "lc", "alpha3": "lca" },
  { "id": 663, "name": "Saint Martin (French part)", "alpha2": "mf", "alpha3": "maf" },
  { "id": 666, "name": "Saint Pierre and Miquelon", "alpha2": "pm", "alpha3": "spm" },
  { "id": 670, "name": "Saint Vincent and the Grenadines", "alpha2": "vc", "alpha3": "vct" },
  { "id": 882, "name": "Samoa", "alpha2": "ws", "alpha3": "wsm" },
  { "id": 674, "name": "San Marino", "alpha2": "sm", "alpha3": "smr" },
  { "id": 678, "name": "Sao Tome and Principe", "alpha2": "st", "alpha3": "stp" },
  { "id": 682, "name": "Saudi Arabia", "alpha2": "sa", "alpha3": "sau" },
  { "id": 686, "name": "Senegal", "alpha2": "sn", "alpha3": "sen" },
  { "id": 688, "name": "Serbia", "alpha2": "rs", "alpha3": "srb" },
  { "id": 690, "name": "Seychelles", "alpha2": "sc", "alpha3": "syc" },
  { "id": 694, "name": "Sierra Leone", "alpha2": "sl", "alpha3": "sle" },
  { "id": 702, "name": "Singapore", "alpha2": "sg", "alpha3": "sgp" },
  { "id": 534, "name": "Sint Maarten (Dutch part)", "alpha2": "sx", "alpha3": "sxm" },
  { "id": 703, "name": "Slovakia", "alpha2": "sk", "alpha3": "svk" },
  { "id": 705, "name": "Slovenia", "alpha2": "si", "alpha3": "svn" },
  { "id": 90, "name": "Solomon Islands", "alpha2": "sb", "alpha3": "slb" },
  { "id": 706, "name": "Somalia", "alpha2": "so", "alpha3": "som" },
  { "id": 710, "name": "South Africa", "alpha2": "za", "alpha3": "zaf" },
  { "id": 239, "name": "South Georgia and the South Sandwich Islands", "alpha2": "gs", "alpha3": "sgs" },
  { "id": 728, "name": "South Sudan", "alpha2": "ss", "alpha3": "ssd" },
  { "id": 724, "name": "Spain", "alpha2": "es", "alpha3": "esp" },
  { "id": 144, "name": "Sri Lanka", "alpha2": "lk", "alpha3": "lka" },
  { "id": 729, "name": "Sudan", "alpha2": "sd", "alpha3": "sdn" },
  { "id": 740, "name": "Suriname", "alpha2": "sr", "alpha3": "sur" },
  { "id": 744, "name": "Svalbard and Jan Mayen", "alpha2": "sj", "alpha3": "sjm" },
  { "id": 752, "name": "Sweden", "alpha2": "se", "alpha3": "swe" },
  { "id": 756, "name": "Switzerland", "alpha2": "ch", "alpha3": "che" },
  { "id": 760, "name": "Syrian Arab Republic", "alpha2": "sy", "alpha3": "syr" },
  { "id": 158, "name": "Taiwan, Province of China", "alpha2": "tw", "alpha3": "twn" },
  { "id": 762, "name": "Tajikistan", "alpha2": "tj", "alpha3": "tjk" },
  { "id": 834, "name": "Tanzania, United Republic of", "alpha2": "tz", "alpha3": "tza" },
  { "id": 764, "name": "Thailand", "alpha2": "th", "alpha3": "tha" },
  { "id": 626, "name": "Timor-Leste", "alpha2": "tl", "alpha3": "tls" },
  { "id": 768, "name": "Togo", "alpha2": "tg", "alpha3": "tgo" },
  { "id": 772, "name": "Tokelau", "alpha2": "tk", "alpha3": "tkl" },
  { "id": 776, "name": "Tonga", "alpha2": "to", "alpha3": "ton" },
  { "id": 780, "name": "Trinidad and Tobago", "alpha2": "tt", "alpha3": "tto" },
  { "id": 788, "name": "Tunisia", "alpha2": "tn", "alpha3": "tun" },
  { "id": 792, "name": "Turkey", "alpha2": "tr", "alpha3": "tur" },
  { "id": 795, "name": "Turkmenistan", "alpha2": "tm", "alpha3": "tkm" },
  { "id": 796, "name": "Turks and Caicos Islands", "alpha2": "tc", "alpha3": "tca" },
  { "id": 798, "name": "Tuvalu", "alpha2": "tv", "alpha3": "tuv" },
  { "id": 800, "name": "Uganda", "alpha2": "ug", "alpha3": "uga" },
  { "id": 804, "name": "Ukraine", "alpha2": "ua", "alpha3": "ukr" },
  { "id": 784, "name": "United Arab Emirates", "alpha2": "ae", "alpha3": "are" },
  { "id": 826, "name": "United Kingdom of Great Britain and Northern Ireland", "alpha2": "gb", "alpha3": "gbr" },
  { "id": 840, "name": "United States of America", "alpha2": "us", "alpha3": "usa" },
  { "id": 581, "name": "United States Minor Outlying Islands", "alpha2": "um", "alpha3": "umi" },
  { "id": 858, "name": "Uruguay", "alpha2": "uy", "alpha3": "ury" },
  { "id": 860, "name": "Uzbekistan", "alpha2": "uz", "alpha3": "uzb" },
  { "id": 548, "name": "Vanuatu", "alpha2": "vu", "alpha3": "vut" },
  { "id": 862, "name": "Venezuela (Bolivarian Republic of)", "alpha2": "ve", "alpha3": "ven" },
  { "id": 704, "name": "Viet Nam", "alpha2": "vn", "alpha3": "vnm" },
  { "id": 92, "name": "Virgin Islands (British)", "alpha2": "vg", "alpha3": "vgb" },
  { "id": 850, "name": "Virgin Islands (U.S.)", "alpha2": "vi", "alpha3": "vir" },
  { "id": 876, "name": "Wallis and Futuna", "alpha2": "wf", "alpha3": "wlf" },
  { "id": 732, "name": "Western Sahara", "alpha2": "eh", "alpha3": "esh" },
  { "id": 887, "name": "Yemen", "alpha2": "ye", "alpha3": "yem" },
  { "id": 894, "name": "Zambia", "alpha2": "zm", "alpha3": "zmb" },
  { "id": 716, "name": "Zimbabwe", "alpha2": "zw", "alpha3": "zwe" }]







  baseURL = 'https://thelevapp.co/backoffice/webservices/'

  baseUrlForImg = 'https://thelevapp.co/backoffice/uploads/users_customers/'


  newarr: any;

  constructor(private http: HttpClient,
    public alertcontroller: AlertController) { }

  removebadwords(string) {
    let strtoarray = string.split(' ')
    console.log('strtoarray=', strtoarray);

    var badwords = this.newarr


    badwords.map(element => {
      var lowBadWord = element.toLowerCase();

      if (strtoarray.includes(lowBadWord)) {
        console.log("have bad word ", lowBadWord);
        let str1 = strtoarray.indexOf(lowBadWord)
        console.log('str get--', str1);
        strtoarray.splice(str1, 1)
        console.log('str get--after', strtoarray);
        var newStringValue = strtoarray.toString()

        string = newStringValue.replaceAll(',', ' ')
        console.log('replace afreter==', string);
        this.basicAlert('you are not allowed to use this word')
      }
      else {
        console.log("Pak saf word ");
      }
    });

    return string;
  }

  sendRequest(action, data, token?) {
    let header;
    if (token) {
      header = new HttpHeaders({
        'Auth-Key': token,
      });
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    } else {
      header = new HttpHeaders();
      header.append('Access-Control-Allow-Origin', '*');
      header.append(
        'Access-Control-Allow-Methods',
        'POST, GET, DELETE, PUT,OPTIONS'
      );
    }
    return this.http.post(`${this.baseURL}/${action}/`, JSON.stringify(data), {
      headers: header,
    });
  }


  getOTP(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + '/send_otp/', data, { headers });
  }



  profile1API(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + '/signup/', data, { headers });
  }


  profileAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + '/profile/', data, { headers });
  }


  getUserPrompts(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + '/user_prompts/', data, { headers });
  }



  getSystemDataAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_all_system_data', data, { headers });
  }


  signupAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'signup', data, { headers });
  }

  check_email_existsAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'check_email_exists', data, { headers });
  }


  check_contact_existsAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'check_contact_exists', data, { headers });
  }



  getSubScriptionDetailsAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_packages', data, { headers });
  }


  loginAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'login', data, { headers });
  }


  contactUSAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'contact_us', data, { headers });
  }


  get_user_dataAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_user_data', data, { headers });
  }


  get_user_auto_repsonse(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_auto_response/' + data, { headers });
  }



  saveSubscriptiondataAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'create_transactions/', data, { headers });
  }



  create_sms_transactionsAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'create_sms_transactions/' + data, { headers });
  }






  get_coupon_dataAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_coupon_data/' + data, { headers });
  }




  updatePrefAPI(funName, uid, data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'update_prefences/' + funName + uid, data, { headers });
  }


  cancelSubscription(uid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'cancel_subscription/' + uid, { headers });
  }



  get_user_preferencesAPI(uid) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_user_preferences/' + uid, { headers });
  }



  chat_messagesAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'chat_messages/', data, { headers });
  }

  admin_chat_messagesAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'admin_chat_messages/', data, { headers });
  }



  getBestMatchesAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_matches/', data, { headers });
  }

  blockuser(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'blockuser/', data, { headers });
  }
  unblockuser(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'unblockuser/', data, { headers });
  }

  repoertuser(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'reportUser/', data, { headers });
  }

  deluser(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'deleteUser/', data, { headers });
  }

  update_notification_switchAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'update_notification_switch/', data, { headers });
  }





  get_notifications_listAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_notifications_list/', data, { headers });
  }



  update_additional_commentsAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'update_additional_comments/', data, { headers });
  }

  save_prompt_repliesAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'save_prompt_replies/', data, { headers });
  }


  get_prompt_repliesAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'get_prompt_replies/', data, { headers });
  }


  create_polsqsAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'create_polsqs/', data, { headers });
  }



  delete_matchAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'delete_match/', data, { headers });
  }


  remove_matchAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'remove_match/', data, { headers });
  }


  check_phone_authAPI(data) {
    let headers = {
      'Content-Type': 'application/json',
    };

    return this.http.post(this.baseURL + 'check_phone_auth/', data, { headers });
  }


  getFAQ() {
    let headers = {
      'Content-Type': 'application/json',
    };

  
    return this.http.post(this.baseURL + 'get_faqs', { headers });
    
  }





  updateUserDataAPI(data, userID) {
    let headers = {
      'Content-Type': 'application/json',
    };

    console.log('rest data -----', this.baseURL + 'update_profile' + userID + data);

    return this.http.post(this.baseURL + 'update_profile/' + userID, data, { headers });
  }

  async basicAlert(message) {
    const alert = await this.alertcontroller.create({
      cssClass: 'basicAlert',
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

}
