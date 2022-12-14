//TODO: transform into objects

export const disneyVoices = {
  ghostface: "en_us_ghostface",
  chewbacca: "en_us_chewbacca",
  c3po: "en_us_c3po",
  stitch: "en_us_stitch",
  stormtrooper: "en_us_stormtrooper",
  rocket: "en_us_rocket",
};

export const englishVoices = {
  englishAuFemale: "en_au_001",
  englishAuMale: "en_au_002",
  englishUkMale1: "en_uk_001",
  englishUkMale2: "en_uk_003",
  englishUsFemale1: "en_us_001",
  englishUsFemale2: "en_us_002",
  englishUsMale1: "en_us_006",
  englishUsMale2: "en_us_007",
  englishUsMale3: "en_us_009",
  englishUsMale4: "en_us_010",
};

export const europeVoices = {
  frenchMale1: "fr_001",
  frenchMale2: "fr_002",
  germanFemale: "de_001",
  germanMale: "de_002",
  spanishMale: "es_002",
};

export const americaVoices = {
  spanishMxMale: "es_mx_002",
  portugueseBrFemale1: "br_001",
  portugueseBrFemale2: "br_003",
  portugueseBrFemale3: "br_004",
  portugueseBrMale: "br_005",
};

export const asiaVoices = {
  indonesianFemale: "id_001", //  # Indonesian - Female
  japaneseFemale1: "jp_001", // # Japanese - Female 1
  japaneseFemale2: "jp_003", //  # Japanese - Female 2
  japaneseFemale3: "jp_005", // # Japanese - Female 3
  japaneseMale: "jp_006", //  # Japanese - Male
  koreanMale1: "kr_002", //  # Korean - Male 1
  koreanFemale: "kr_003", // # Korean - Female
  koreanMale2: "kr_004", //   # Korean - Male 2
};

export const singingVoices = {
  alto: "en_female_f08_salut_damour", // # Alto
  tenor: "en_male_m03_lobby", // # Tenor
  warmyBreeze: "en_female_f08_warmy_breeze", //# Warmy Breeze
  sunshineSoon: "en_male_m03_sunshine_soon", //# Sunshine Soon
};

export const emotionalVoices = {
  maleNarrator: "en_male_narration", //# narrator
  maleWacky: "en_male_funny", //  # wacky
  femalePeaceful: "en_female_emotional", // # peaceful
};

export const moreVoices = {
  en_us_ghostface: "Scream",
  en_male_grinch: "Trickster",
  en_male_wizard: "Magician",
  en_female_ht_f08_halloween: "Opera",
  en_female_madam_leota: "Madame Leota",
  en_male_ghosthost: "Ghost Host",
  en_male_pirate: "Pirate",
  en_female_ht_f08_glorious: "Euphoric",
  en_male_sing_funny_it_goes_up: "Hypetrain",
  en_female_samc: "Empathetic",
  en_male_cody: "Serious",
  en_female_ht_f08_wonderful_world: "Melodrama",
  en_male_m2_xhxs_m03_silly: "Quirky Time",
  en_male_funny: "Wacky",
  en_male_m03_lobby: "Jingle",
  en_female_f08_salut_damour: "Cottagecore",
};

export const allVoices = {
  ...americaVoices,
  ...asiaVoices,
  ...disneyVoices,
  ...emotionalVoices,
  ...englishVoices,
  ...europeVoices,
  ...singingVoices,
  ...moreVoices,
};
