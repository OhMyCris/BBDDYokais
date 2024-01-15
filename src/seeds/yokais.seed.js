const mongoose = require("mongoose");

const Yokai = require("../api/models/yokai.model");

const DB_URL = process.env.DB_URL;
const arrayYokais = [
  {
    "nombre": "Abumi-guchi",
    "tipo": "Tsukumogami",
    "desc": "Es un tipo de tsukumogami formado a partir de un estribo, generalmente uno que alguna vez perteneció a un soldado muerto que cayó en la batalla. Se dice que el abumi-guchi esperará donde yace a que regrese el soldado muerto.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/4/41/SekienAbumi-guchi.jpg"
  },
  {
    "nombre": "Abura-akago",
    "tipo": "Humanoide",
    "desc": "Un espíritu infante lamiendo aceite de una lámpara andon. Hace mucho en el pueblo de Shiga había un comerciante de aceite, y cada noche robaba aceite del Jizō de los cruces de Ōtsu, pero cuando esta persona murió su alma se convirtió en una llama y aún crece acostumbrado a este fuego errante. Si es así entonces el bebé que lame el aceite es el renacimiento de esta persona.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/6/66/SekienAburaakago.jpg"
  },
  {
    "nombre": "Abura-sumashi",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu aceitoso que se encuentra en cruces de caminos. Suele aparecer de repente y frotar aceite en la ropa de los viajeros.",
    "foto": "enlace_a_la_imagen_abura_sumashi.jpg"
  },
  {
    "nombre": "Aka Manto",
    "tipo": "Humanoide",
    "desc": "Fantasma que se manifiesta en baños públicos. Ofrece papel higiénico de color rojo y azul, y se lleva a aquellos que lo aceptan.",
    "foto": "enlace_a_la_imagen_aka_manto.jpg"
  },
  {
    "nombre": "Akaname",
    "tipo": "Tsukumogami",
    "desc": "Criatura que se origina a partir de un sucio fregadero. Se alimenta de suciedad y mugre.",
    "foto": "enlace_a_la_imagen_akaname.jpg"
  },
  {
    "nombre": "Akashita",
    "tipo": "Humanoide",
    "desc": "Espíritu maligno que se esconde en los árboles y acecha a los viajeros nocturnos.",
    "foto": "enlace_a_la_imagen_akashita.jpg"
  },
  {
    "nombre": "Akateko",
    "tipo": "Tsukumogami",
    "desc": "Criatura formada a partir de un juguete viejo y abandonado. Se mueve por sí misma durante la noche.",
    "foto": "enlace_a_la_imagen_akateko.jpg"
  },
  {
    "nombre": "Akuma",
    "tipo": "Humanoide",
    "desc": "Demonio malévolo que siembra la discordia entre los seres humanos.",
    "foto": "enlace_a_la_imagen_akuma.jpg"
  },
  {
    "nombre": "Amabie",
    "tipo": "Fenomeno Natural",
    "desc": "Criatura marina con la capacidad de predecir epidemias. Su apariencia se asemeja a una mezcla de ave, mono y pez.",
    "foto": "enlace_a_la_imagen_amabie.jpg"
  },
  {
    "nombre": "Aoandon",
    "tipo": "Humanoide",
    "desc": "Espíritu vengativo que se manifiesta cuando se cuentan historias de terror. Su apariencia es la de una mujer con una lámpara en la mano.",
    "foto": "enlace_a_la_imagen_aoandon.jpg"
  },
  {
    "nombre": "Amanojaku",
    "tipo": "Humanoide",
    "desc": "Espíritu travieso que incita a las personas a hacer cosas malvadas y desagradables.",
    "foto": "enlace_a_la_imagen_amanojaku.jpg"
  },
  {
    "nombre": "Amazake-babaa",
    "tipo": "Humanoide",
    "desc": "Anciana que vaga por los campos de arroz. Ofrece amazake (bebida dulce de arroz) a los viajeros, pero puede castigar a aquellos que la rechazan.",
    "foto": "enlace_a_la_imagen_amazake_babaa.jpg"
  },
  {
    "nombre": "Amefurikozō",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu de la lluvia que se manifiesta como un niño pequeño con una lámpara de papel. Suele aparecer antes de las fuertes lluvias.",
    "foto": "enlace_a_la_imagen_amefurikozo.jpg"
  },
  {
    "nombre": "Ameonna",
    "tipo": "Fenomeno Natural",
    "desc": "Diosa de la lluvia que trae fertilidad a la tierra. A menudo se la representa como una mujer llorando con un abanico.",
    "foto": "enlace_a_la_imagen_ameonna.jpg"
  },
  {
    "nombre": "Amikiri",
    "tipo": "Animal",
    "desc": "Criatura parecida a una mantis que corta las telarañas de los templos y santuarios.",
    "foto": "enlace_a_la_imagen_amikiri.jpg"
  },
  {
    "nombre": "Aobōzu",
    "tipo": "Humanoide",
    "desc": "Monje malvado que se disfraza de niño para engañar a los viajeros. Puede volverse invisible a voluntad.",
    "foto": "enlace_a_la_imagen_aobozu.jpg"
  },
  {
    "nombre": "Aonyōbō",
    "tipo": "Humanoide",
    "desc": "Espíritu femenino que se manifiesta en las tormentas y vientos fuertes. Su apariencia suele ser aterradora.",
    "foto": "enlace_a_la_imagen_aonyobo.jpg"
  },
  {
    "nombre": "Aosaginohi",
    "tipo": "Animal",
    "desc": "Garza mística que se cree trae buena suerte y fortuna. Se le asocia con aguas limpias y saludables.",
    "foto": "enlace_a_la_imagen_aosaginohi.jpg"
  },
  {
    "nombre": "Ashinagatenaga",
    "tipo": "Humanoide",
    "desc": "Espíritu con piernas extremadamente largas que se dice que habita en las aguas y pantanos.",
    "foto": "enlace_a_la_imagen_ashinagatenaga.jpg"
  },
  {
    "nombre": "Ayakashi",
    "tipo": "Fenomeno Natural",
    "desc": "Fenómeno paranormal que se manifiesta como una extraña luz o niebla. Se cree que son espíritus inquietos.",
    "foto": "enlace_a_la_imagen_ayakashi.jpg"
  },
  {
    "nombre": "Azukiarai",
    "tipo": "Animal",
    "desc": "Criatura que aparece en ríos y arroyos, lavando frijoles azuki. Suele asustar a quienes lo encuentran.",
    "foto": "enlace_a_la_imagen_azukiarai.jpg"
  },
  {
    "nombre": "Bake-kujira",
    "tipo": "Fenomeno Natural",
    "desc": "Espectro de una ballena fantasma que trae desgracia y calamidades. Se dice que su aparición predice eventos trágicos.",
    "foto": "enlace_a_la_imagen_bake_kujira.jpg"
  },
  {
    "nombre": "Baku",
    "tipo": "Animal",
    "desc": "Criatura mítica que se alimenta de los sueños de las personas. Se cree que puede proteger contra las pesadillas.",
    "foto": "enlace_a_la_imagen_baku.jpg"
  },
  {
    "nombre": "Basan",
    "tipo": "Animal",
    "desc": "Ave mítica con un plumaje brillante que emite un sonido peculiar. Se dice que su presencia trae buena suerte.",
    "foto": "enlace_a_la_imagen_basan.jpg"
  },
  {
    "nombre": "Bakezōri",
    "tipo": "Tsukumogami",
    "desc": "Zapato viejo que ha cobrado vida. A veces, realiza actividades nocturnas como danzar y saltar para molestar a los residentes de una casa.",
    "foto": "enlace_a_la_imagen_bakezori.jpg"
  },
  {
    "nombre": "Binbōgami",
    "tipo": "Humanoide",
    "desc": "Dios de la pobreza que trae desgracias financieras. Se le puede apaciguar con ofrendas y actos de caridad.",
    "foto": "enlace_a_la_imagen_binbogami.jpg"
  },
  {
    "nombre": "Biwa-bokuboku",
    "tipo": "Tsukumogami",
    "desc": "Espíritu de un biwa (instrumento musical japonés) que ha cobrado vida. Puede emitir sonidos por sí mismo y a veces es asociado con la música misteriosa.",
    "foto": "enlace_a_la_imagen_biwa_bokuboku.jpg"
  },
  {
    "nombre": "Boroboroton",
    "tipo": "Humanoide",
    "desc": "Criatura que viste harapos y trapos viejos. Se cree que aparece en lugares abandonados y puede asustar a aquellos que se acercan.",
    "foto": "enlace_a_la_imagen_boroboroton.jpg"
  },
  {
    "nombre": "Chimimōryō",
    "tipo": "Humanoide",
    "desc": "Espíritu malévolo que causa enfermedades y desastres. Se cree que puede ser conjurado por hechiceros oscuros.",
    "foto": "enlace_a_la_imagen_chimimoryo.jpg"
  },
  {
    "nombre": "Chōchin'obake",
    "tipo": "Tsukumogami",
    "desc": "Linterna antigua que ha cobrado vida. A veces se le representa con un solo ojo y una lengua larga. Puede asustar a quienes lo encuentran.",
    "foto": "enlace_a_la_imagen_chochin_obake.jpg"
  },
  {
    "nombre": "Daidarabotchi",
    "tipo": "Humanoide",
    "desc": "Gigante mítico que se dice que formó montañas y ríos con sus manos. Su apariencia imponente asusta a quienes lo encuentran.",
    "foto": "enlace_a_la_imagen_daidarabotchi.jpg"
  },
  {
    "nombre": "Dodomeki",
    "tipo": "Humanoide",
    "desc": "Mujer cuyos brazos están cubiertos de ojos. Se cree que estos ojos son resultado de su avaricia en vida.",
    "foto": "enlace_a_la_imagen_dodomeki.jpg"
  },
  {
    "nombre": "Dorotabō",
    "tipo": "Humanoide",
    "desc": "Espíritu vengativo que se manifiesta como un anciano mojado y maloliente. Busca venganza por injusticias pasadas.",
    "foto": "enlace_a_la_imagen_dorotabo.jpg"
  },
  {
    "nombre": "Dragon",
    "tipo": "Animal",
    "desc": "Criatura mítica con forma de dragón, a menudo asociada con la buena fortuna y la protección divina.",
    "foto": "enlace_a_la_imagen_dragon.jpg"
  },
  {
    "nombre": "Enenra",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu de humo que se forma a partir de las hogueras. Su presencia se asocia con la melancolía y la nostalgia.",
    "foto": "enlace_a_la_imagen_enenra.jpg"
  },
  {
    "nombre": "Funayūrei",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu de una persona fallecida en el mar. Se cree que su aparición trae mala suerte a los marineros.",
    "foto": "enlace_a_la_imagen_funayurei.jpg"
  },
  {
    "nombre": "Furaribi",
    "tipo": "Fenomeno Natural",
    "desc": "Bola de fuego misteriosa que flota en el aire. Se cree que son almas en pena buscando redención.",
    "foto": "enlace_a_la_imagen_furaribi.jpg"
  },
  {
    "nombre": "Fūri",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu vengativo que se manifiesta como una ráfaga de viento fuerte. Suele castigar a aquellos que han causado daño.",
    "foto": "enlace_a_la_imagen_furi.jpg"
  },
  {
    "nombre": "Futakuchi-onna",
    "tipo": "Humanoide",
    "desc": "Mujer con una boca adicional en la parte posterior de su cabeza. Esta boca hambrienta se manifiesta cuando la persona está descuidada o maltratada.",
    "foto": "enlace_a_la_imagen_futakuchionna.jpg"
  },
  {
    "nombre": "Gagoze",
    "tipo": "Animal",
    "desc": "Criatura demoníaca con colmillos afilados. Se le asocia con la oscuridad y se dice que ataca a los desprevenidos en la noche.",
    "foto": "enlace_a_la_imagen_gagoze.jpg"
  },
  {
    "nombre": "Gashadokuro",
    "tipo": "Fenomeno Natural",
    "desc": "Esqueleto gigante formado por los huesos de personas fallecidas. Se cree que aparece para advertir sobre guerras y desastres.",
    "foto": "enlace_a_la_imagen_gashadokuro.jpg"
  },
  {
    "nombre": "Goryō",
    "tipo": "Humanoide",
    "desc": "Espíritu vengativo de una persona fallecida. Busca venganza por agravios sufridos en vida y puede causar desgracias a quienes lo encuentran.",
    "foto": "enlace_a_la_imagen_goryo.jpg"
  },
  {
    "nombre": "Hanako-san",
    "tipo": "Humanoide",
    "desc": "Espíritu de una niña que se dice que habita en los baños de las escuelas. Algunas leyendas afirman que puede conceder deseos.",
    "foto": "enlace_a_la_imagen_hanako_san.jpg"
  },
  {
    "nombre": "Harionago",
    "tipo": "Humanoide",
    "desc": "Mujer con largos hilos de cabello que utiliza como látigos. Puede atraer a los hombres con su belleza antes de atacar.",
    "foto": "enlace_a_la_imagen_harionago.jpg"
  },
  {
    "nombre": "Hibagon",
    "tipo": "Animal",
    "desc": "Criatura similar a un simio que se dice que habita en los bosques de Japón. Su existencia es objeto de leyendas y avistamientos no confirmados.",
    "foto": "enlace_a_la_imagen_hibagon.jpg"
  },
  {
    "nombre": "Hiderigami",
    "tipo": "Planta",
    "desc": "Dios de la nieve y el invierno. Se le atribuye la capacidad de ocultar la verdad y confundir a las personas.",
    "foto": "enlace_a_la_imagen_hiderigami.jpg"
  },
  {
    "nombre": "Hinezumi",
    "tipo": "Animal",
    "desc": "Rata mágica que se cree trae buena suerte y prosperidad. A menudo es venerada como un símbolo de fortuna.",
    "foto": "enlace_a_la_imagen_hinezumi.jpg"
  },
  {
    "nombre": "Hito-gitsune",
    "tipo": "Animal",
    "desc": "Pequeño zorro espiritual que se cree puede poseer a los humanos. Puede traer buena o mala fortuna dependiendo de su estado de ánimo.",
    "foto": "enlace_a_la_imagen_hito_gitsune.jpg"
  },
  {
    "nombre": "Hitotsume-kozō",
    "tipo": "Humanoide",
    "desc": "Espíritu infantil con un solo ojo en la frente. A veces se le representa llevando una linterna.",
    "foto": "enlace_a_la_imagen_hitotsume_kozo.jpg"
  },
  {
    "nombre": "Hitotsume-nyūdō",
    "tipo": "Humanoide",
    "desc": "Monje ciego con un solo ojo en la frente. Se dice que vaga por la noche asustando a los desprevenidos.",
    "foto": "enlace_a_la_imagen_hitotsume_nyudo.jpg"
  },
  {
    "nombre": "Hone-onna",
    "tipo": "Humanoide",
    "desc": "Mujer esquelética que busca venganza por la traición en vida. A menudo se le representa con una apariencia seductora.",
    "foto": "enlace_a_la_imagen_hone_onna.jpg"
  },
  {
    "nombre": "Hyōsube",
    "tipo": "Humanoide",
    "desc": "Pequeño espíritu con cabeza de calabaza. Se le asocia con la agricultura y la fertilidad de los campos.",
    "foto": "enlace_a_la_imagen_hyosube.jpg"
  },
  {
    "nombre": "Ikiryō",
    "tipo": "Humanoide",
    "desc": "Espíritu errante de una persona viva. Puede separarse del cuerpo y viajar a lugares lejanos durante el sueño.",
    "foto": "enlace_a_la_imagen_ikiryo.jpg"
  },
  {
    "nombre": "Ikuchi",
    "tipo": "Animal",
    "desc": "Criatura parecida a una serpiente marina gigante. Se dice que habita en aguas profundas y es conocida por su apetito voraz.",
    "foto": "enlace_a_la_imagen_ikuchi.jpg"
  },
  {
    "nombre": "Inugami",
    "tipo": "Animal",
    "desc": "Espíritu canino invocado mediante rituales oscuros. Puede traer buena o mala fortuna dependiendo de la intención del conjurador.",
    "foto": "enlace_a_la_imagen_inugami.jpg"
  },
  {
    "nombre": "Ishinagenjo",
    "tipo": "Humanoide",
    "desc": "Espíritu que se cree habita en las rocas y formaciones geológicas. Su presencia puede ser protectora o malévola.",
    "foto": "enlace_a_la_imagen_ishinagenjo.jpg"
  },
  {
    "nombre": "Isonade",
    "tipo": "Animal",
    "desc": "Tiburón monstruoso con afiladas aletas y escamas. Se dice que ataca a los pescadores desafortunados arrastrándolos hacia el mar.",
    "foto": "enlace_a_la_imagen_isonade.jpg"
  },
  {
    "nombre": "Ittan-momen",
    "tipo": "Tsukumogami",
    "desc": "Rollo de tela largo que ha cobrado vida. A veces, se transforma en una banda flotante y ataca a las personas envolviéndolas.",
    "foto": "enlace_a_la_imagen_ittan_momen.jpg"
  },
  {
    "nombre": "Janjanbi",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu que causa terremotos al agitar una campana. Se le atribuye la responsabilidad de los temblores de tierra.",
    "foto": "enlace_a_la_imagen_janjanbi.jpg"
  },
  {
    "nombre": "Jinmenju",
    "tipo": "Planta",
    "desc": "Árbol con frutas con forma de cabezas humanas. Se cree que las cabezas cantan canciones alegres cuando el viento las hace vibrar.",
    "foto": "enlace_a_la_imagen_jinmenju.jpg"
  },
  {
    "nombre": "Jorōgumo",
    "tipo": "Animal",
    "desc": "Araña gigante que tiene la capacidad de transformarse en una mujer hermosa. Atrae a los viajeros para luego devorarlos.",
    "foto": "enlace_a_la_imagen_jorogumo.jpg"
  },
  {
    "nombre": "Jubokko",
    "tipo": "Planta",
    "desc": "Árbol vampírico que se alimenta de la sangre de los que han muerto en la batalla. Se dice que crece en campos de batalla antiguos.",
    "foto": "enlace_a_la_imagen_jubokko.jpg"
  },
  {
    "nombre": "Kaibyō Bakeneko",
    "tipo": "Animal",
    "desc": "Gato que ha adquirido habilidades sobrenaturales, como la capacidad de hablar o cambiar de forma. Puede ser benevolente o malévolo.",
    "foto": "enlace_a_la_imagen_kaibyo_bakeneko.jpg"
  },
  {
    "nombre": "Nekomata",
    "tipo": "Animal",
    "desc": "Gato de dos colas con habilidades mágicas. Se cree que puede levantar su cola y controlar a los muertos.",
    "foto": "enlace_a_la_imagen_nekomata.jpg"
  },
  {
    "nombre": "Kamaitachi",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu cortante del viento que se manifiesta como ráfagas afiladas. Se dice que causa cortes repentinos e invisibles en las personas.",
    "foto": "enlace_a_la_imagen_kamaitachi.jpg"
  },
  {
    "nombre": "Kamikiri",
    "tipo": "Animal",
    "desc": "Insecto cortante que se alimenta de cabello humano. Se cree que corta mechones de pelo mientras la persona duerme.",
    "foto": "enlace_a_la_imagen_kamikiri.jpg"
  },
  {
    "nombre": "Kappa",
    "tipo": "Animal",
    "desc": "Criatura acuática con un cuenco en la cabeza. Se dice que vive en ríos y lagos, y a menudo desafía a los humanos a duelos sumo.",
    "foto": "enlace_a_la_imagen_kappa.jpg"
  },
  {
    "nombre": "Kasa-obake",
    "tipo": "Tsukumogami",
    "desc": "Paraguas viejo que cobra vida después de 100 años. Puede saltar sobre una pierna y tiene una lengua que cuelga.",
    "foto": "enlace_a_la_imagen_kasa_obake.jpg"
  },
  {
    "nombre": "Kasha",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu que roba cuerpos recién fallecidos y los lleva al inframundo. Se dice que aparece durante los funerales para llevarse a los difuntos.",
    "foto": "enlace_a_la_imagen_kasha.jpg"
  },
  {
    "nombre": "Kawauso",
    "tipo": "Animal",
    "desc": "Nutria con habilidades mágicas. Puede cambiar de forma para engañar a los humanos. A veces se le atribuye la capacidad de imitar la voz humana.",
    "foto": "enlace_a_la_imagen_kawauso.jpg"
  },
  {
    "nombre": "Keukegen",
    "tipo": "Animal",
    "desc": "Criatura peluda que vive en lugares desordenados y sucios. Puede causar enfermedades y desgracias a aquellos que no mantienen la limpieza.",
    "foto": "enlace_a_la_imagen_keukegen.jpg"
  },
  {
    "nombre": "Kijimuna",
    "tipo": "Humanoide",
    "desc": "Espíritu del bosque de Okinawa con apariencia de niño pequeño. A veces se le representa jugando travesuras o ayudando a los aldeanos.",
    "foto": "enlace_a_la_imagen_kijimuna.jpg"
  },
  {
    "nombre": "Kinoko",
    "tipo": "Planta",
    "desc": "Seta mágica que crece en lugares antiguos y sagrados. Se cree que tiene propiedades curativas y puede conceder bendiciones.",
    "foto": "enlace_a_la_imagen_kinoko.jpg"
  },
  {
    "nombre": "Kirin",
    "tipo": "Animal",
    "desc": "Criatura parecida a un unicornio con cuerno y escamas. Es un símbolo de buena fortuna y se dice que solo aparece en presencia de gobernantes justos.",
    "foto": "enlace_a_la_imagen_kirin.jpg"
  },
  {
    "nombre": "Kitsune",
    "tipo": "Animal",
    "desc": "Zorro mágico con múltiples colas. Puede cambiar de forma y tiene habilidades sobrenaturales. A menudo es asociado con la astucia y la sabiduría.",
    "foto": "enlace_a_la_imagen_kitsune.jpg"
  },
  {
    "nombre": "Hakuzōsu",
    "tipo": "Humanoide",
    "desc": "Espíritu de la agricultura y la fertilidad. Se le asocia con la protección de los campos y el éxito en las cosechas.",
    "foto": "enlace_a_la_imagen_hakuzosu.jpg"
  },
  {
    "nombre": "Kitsunebi",
    "tipo": "Fenomeno Natural",
    "desc": "Luz misteriosa que se cree es producida por los zorros mágicos. Puede ser un presagio de buena o mala fortuna dependiendo de su color.",
    "foto": "enlace_a_la_imagen_kitsunebi.jpg"
  },
  {
    "nombre": "Kodama",
    "tipo": "Planta",
    "desc": "Espíritu del árbol venerado por los bosques. Se cree que habita en árboles antiguos y castiga a aquellos que dañan la naturaleza.",
    "foto": "enlace_a_la_imagen_kodama.jpg"
  },
  {
    "nombre": "Komainu",
    "tipo": "Animal",
    "desc": "Leones o perros guardianes que protegen los santuarios y templos. Se colocan a menudo en pares para representar el equilibrio.",
    "foto": "enlace_a_la_imagen_komainu.jpg"
  },
  {
    "nombre": "Konaki-jiji",
    "tipo": "Humanoide",
    "desc": "Espíritu anciano que llora como un bebé. Puede confundir y atraer a las personas. A veces se le representa como un anciano encorvado.",
    "foto": "enlace_a_la_imagen_konaki_jiji.jpg"
  },
  {
    "nombre": "Korpokkur",
    "tipo": "Humanoide",
    "desc": "Pequeño espíritu de la tierra que vive en agujeros. A veces ayuda a los agricultores, pero también puede gastar bromas traviesas.",
    "foto": "enlace_a_la_imagen_korpokkur.jpg"
  },
  {
    "nombre": "Koromodako",
    "tipo": "Animal",
    "desc": "Pulpo gigante con caparazón. Se dice que habita en aguas profundas y a veces ataca a los pescadores.",
    "foto": "enlace_a_la_imagen_koromodako.jpg"
  },
  {
    "nombre": "Kotobuki",
    "tipo": "Humanoide",
    "desc": "Espíritu de la longevidad y la felicidad. Se le invoca para bendiciones de larga vida y prosperidad.",
    "foto": "enlace_a_la_imagen_kotobuki.jpg"
  },
  {
    "nombre": "Koto-furunushi",
    "tipo": "Humanoide",
    "desc": "Espíritu músico asociado con el koto (instrumento de cuerda japonés). Se le atribuyen habilidades místicas y se dice que puede traer buena fortuna a los músicos.",
    "foto": "enlace_a_la_imagen_koto_furunushi.jpg"
  },
  {
    "nombre": "Kuchisake-onna",
    "tipo": "Humanoide",
    "desc": "Mujer con la boca cortada de oreja a oreja. Se dice que pregunta a las personas si es hermosa antes de revelar su rostro desfigurado.",
    "foto": "enlace_a_la_imagen_kuchisake_onna.jpg"
  },
  {
    "nombre": "Kuda-gitsune",
    "tipo": "Animal",
    "desc": "Zorro diminuto que cabe en una calabaza. Se cree que tiene poderes mágicos y puede conceder deseos a aquellos que lo cuidan.",
    "foto": "enlace_a_la_imagen_kuda_gitsune.jpg"
  },
  {
    "nombre": "Kudan",
    "tipo": "Animal",
    "desc": "Criatura mitad buey y mitad humano. Se dice que tiene la capacidad de predecir el futuro y sus predicciones suelen ser trágicas.",
    "foto": "enlace_a_la_imagen_kudan.jpg"
  },
  {
    "nombre": "Kyubi",
    "tipo": "Animal",
    "desc": "Zorro de nueve colas con poderes sobrenaturales. Puede ser benevolente o malévolo, y a menudo se asocia con la transformación y la astucia.",
    "foto": "enlace_a_la_imagen_kyubi.jpg"
  },
  {
    "nombre": "Mazoku",
    "tipo": "Humanoide",
    "desc": "Demonio maligno de la mitología japonesa. Posee poderes oscuros y a menudo se le asocia con la tentación y la corrupción.",
    "foto": "enlace_a_la_imagen_mazoku.jpg"
  },
  {
    "nombre": "Menreiki",
    "tipo": "Tsukumogami",
    "desc": "Máscara antigua que ha cobrado vida. Puede cambiar de expresión facial y a veces es asociada con actividades maliciosas.",
    "foto": "enlace_a_la_imagen_menreiki.jpg"
  },
  {
    "nombre": "Mikaribaba",
    "tipo": "Humanoide",
    "desc": "Anciana con una sola pierna y un solo ojo. Se dice que ataca a los viajeros en los cruces de caminos durante la noche.",
    "foto": "enlace_a_la_imagen_mikaribaba.jpg"
  },
  {
    "nombre": "Mikoshi-nyūdōo",
    "tipo": "Humanoide",
    "desc": "Monje errante que lleva un mikoshi (santuario portátil). Se dice que castiga a aquellos que profanan lugares sagrados.",
    "foto": "enlace_a_la_imagen_mikoshi_nyudo.jpg"
  },
  {
    "nombre": "Miage-nyūdō",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu que observa desde arriba. Se cree que puede aparecer en templos y santuarios, mirando a las personas desde lo alto.",
    "foto": "enlace_a_la_imagen_miage_nyudo.jpg"
  },
  {
    "nombre": "Misaki",
    "tipo": "Humanoide",
    "desc": "Fantasma errante que busca venganza por una muerte injusta. A menudo se le ve en lugares solitarios o en la costa.",
    "foto": "enlace_a_la_imagen_misaki.jpg"
  },
  {
    "nombre": "Mizuchi",
    "tipo": "Animal",
    "desc": "Dragón o serpiente acuática con poderes mágicos. Se dice que habita en ríos y lagos, controlando las aguas a su alrededor.",
    "foto": "enlace_a_la_imagen_mizuchi.jpg"
  },
  {
    "nombre": "Mokumokuren",
    "tipo": "Tsukumogami",
    "desc": "Conjunto de ojos que se forman en papeles shōji viejos. Pueden observar y asustar a quienes no cuidan adecuadamente sus pertenencias.",
    "foto": "enlace_a_la_imagen_mokumokuren.jpg"
  },
  {
    "nombre": "Momiji",
    "tipo": "Planta",
    "desc": "Espíritu de los arces japoneses en otoño. Se cree que trae belleza y buenos augurios durante la temporada de colores vibrantes.",
    "foto": "enlace_a_la_imagen_momiji.jpg"
  },
  {
    "nombre": "Mononoke",
    "tipo": "Humanoide",
    "desc": "Espíritu sobrenatural que vaga por el mundo. Puede ser benevolente o malévolo, dependiendo de su naturaleza y acciones pasadas.",
    "foto": "enlace_a_la_imagen_mononoke.jpg"
  },
  {
    "nombre": "Mōryō",
    "tipo": "Fenomeno Natural",
    "desc": "Entidad maligna que causa desastres y calamidades. Se cree que su presencia está asociada con eventos desafortunados.",
    "foto": "enlace_a_la_imagen_moryo.jpg"
  },
  {
    "nombre": "Mujina",
    "tipo": "Humanoide",
    "desc": "Criatura con la apariencia de un mapache o tejón. Puede transformarse en seres humanos y gastar bromas a los desprevenidos.",
    "foto": "enlace_a_la_imagen_mujina.jpg"
  },
  {
    "nombre": "Namahage",
    "tipo": "Humanoide",
    "desc": "Espíritu demoníaco que visita hogares durante el Año Nuevo. Se le representa con una máscara aterradora y busca asustar a los niños.",
    "foto": "enlace_a_la_imagen_namahage.jpg"
  },
  {
    "nombre": "Namazu",
    "tipo": "Animal",
    "desc": "Pez gato gigante que vive en los ríos. Se cree que su movimiento causa terremotos, y a veces es controlado por deidades.",
    "foto": "enlace_a_la_imagen_namazu.jpg"
  },
  {
    "nombre": "Ningyo",
    "tipo": "Animal",
    "desc": "Sirena o pez con aspecto humano. Se dice que posee propiedades curativas, pero también puede traer desgracias a quienes la encuentran.",
    "foto": "enlace_a_la_imagen_ningyo.jpg"
  },
  {
    "nombre": "Noderabō",
    "tipo": "Humanoide",
    "desc": "Espíritu que vaga por los campos en la noche. Puede asustar a aquellos que se cruzan en su camino, pero generalmente es inofensivo.",
    "foto": "enlace_a_la_imagen_noderabo.jpg"
  },
  {
    "nombre": "Noppera-bō",
    "tipo": "Humanoide",
    "desc": "Fantasma sin rostro que asusta a los desprevenidos. A veces adopta la apariencia de una persona antes de revelar su falta de rostro.",
    "foto": "enlace_a_la_imagen_noppera_bo.jpg"
  },
  {
    "nombre": "Nue",
    "tipo": "Animal",
    "desc": "Criatura mítica con la cabeza de mono, el cuerpo de mapache, las extremidades de tigre y la cola de serpiente. Es un presagio de desastres.",
    "foto": "enlace_a_la_imagen_nue.jpg"
  },
  {
    "nombre": "Nuppeppō",
    "tipo": "Humanoide",
    "desc": "Espíritu flácido y maloliente. Aunque su apariencia es repulsiva, es inofensivo y a menudo se le encuentra en lugares abandonados.",
    "foto": "enlace_a_la_imagen_nuppeppo.jpg"
  },
  {
    "nombre": "Nurarihyon",
    "tipo": "Humanoide",
    "desc": "Espíritu anciano que visita hogares para descansar. Aunque parece inofensivo, puede traer buena fortuna o desgracias según cómo se le trate.",
    "foto": "enlace_a_la_imagen_nurarihyon.jpg"
  },
  {
    "nombre": "Nure-onna",
    "tipo": "Animal",
    "desc": "Mujer serpiente que aparece cerca de cuerpos de agua. A veces busca la ayuda de los viajeros, pero también puede ser peligrosa.",
    "foto": "enlace_a_la_imagen_nure_onna.jpg"
  },
  {
    "nombre": "Nurikabe",
    "tipo": "Fenomeno Natural",
    "desc": "Pared invisible que bloquea el paso de aquellos que se cruzan con ella. A menudo se representa como una pared sin ojos ni boca.",
    "foto": "enlace_a_la_imagen_nurikabe.jpg"
  },
  {
    "nombre": "Nyūdō-bōzu",
    "tipo": "Humanoide",
    "desc": "Monje fantasma errante que busca venganza. A veces se manifiesta como una figura alta con cabeza rapada y vestiduras monásticas.",
    "foto": "enlace_a_la_imagen_nyudo_bozu.jpg"
  },
  {
    "nombre": "Obake",
    "tipo": "Tsukumogami",
    "desc": "Objeto cotidiano que cobra vida y se convierte en un espíritu juguetón. Pueden ser desde sombrillas hasta sandalias, tomando formas diversas.",
    "foto": "enlace_a_la_imagen_obake.jpg"
  },
  {
    "nombre": "Oboroguruma",
    "tipo": "Tsukumogami",
    "desc": "Carro o rueda que cobra vida después de estar mucho tiempo sin uso. A veces se manifiesta como una rueda en llamas.",
    "foto": "enlace_a_la_imagen_oboroguruma.jpg"
  },
  {
    "nombre": "Oiwa",
    "tipo": "Humanoide",
    "desc": "Fantasma de una mujer que busca venganza por su muerte injusta. Su historia es famosa en el kabuki y otras formas de teatro japonés.",
    "foto": "enlace_a_la_imagen_oiwa.jpg"
  },
  {
    "nombre": "Okiku",
    "tipo": "Humanoide",
    "desc": "Espíritu vengativo de una mujer que murió trágicamente. Su historia a menudo involucra la cuenta de objetos, como platos o muñecas.",
    "foto": "enlace_a_la_imagen_okiku.jpg"
  },
  {
    "nombre": "Okubi",
    "tipo": "Humanoide",
    "desc": "Cabeza fantasmagórica que vuela por el aire. A veces se representa como una cabeza gigante con cabello largo y despeinado.",
    "foto": "enlace_a_la_imagen_okubi.jpg"
  },
  {
    "nombre": "Ōmukade",
    "tipo": "Animal",
    "desc": "Gran ciempiés monstruoso con poderes venenosos. Es temido por su tamaño y agresividad, y a menudo se asocia con regiones montañosas.",
    "foto": "enlace_a_la_imagen_omukade.jpg"
  },
  {
    "nombre": "Oni",
    "tipo": "Humanoide",
    "desc": "Demonios o espíritus malévolos en la mitología japonesa. Tienen cuernos, colmillos y pieles rojas o azules, y a menudo representan fuerzas destructivas.",
    "foto": "enlace_a_la_imagen_oni.jpg"
  },
  {
    "nombre": "Ibaraki-dōji",
    "tipo": "Humanoide",
    "desc": "Demonio femenino de la mitología japonesa. Acompaña a Shuten-dōji y es conocida por su valentía y habilidades en la batalla.",
    "foto": "enlace_a_la_imagen_ibaraki_doji.jpg"
  },
  {
    "nombre": "Kijo/Onibaba",
    "tipo": "Humanoide",
    "desc": "Mujeres demonio o brujas malévolas. A menudo se asocian con la maldad y la sed de sangre, y son temidas en la mitología japonesa.",
    "foto": "enlace_a_la_imagen_kijo_onibaba.jpg"
  },
  {
    "nombre": "Kidōmaru",
    "tipo": "Humanoide",
    "desc": "Niño demonio con habilidades mágicas. A pesar de su aspecto aterrador, algunas historias lo representan como un ser en busca de redención.",
    "foto": "enlace_a_la_imagen_kidomaru.jpg"
  },
  {
    "nombre": "Rashōmon no oni",
    "tipo": "Humanoide",
    "desc": "Demonio asociado con la Puerta Rashōmon. Se dice que guarda la puerta y ataca a aquellos que intentan pasar sin permiso.",
    "foto": "enlace_a_la_imagen_rashomon_no_oni.jpg"
  },
  {
    "nombre": "Shuten-dōji",
    "tipo": "Humanoide",
    "desc": "Líder de los demonios oni. Es conocido por su gran fuerza y astucia, y a veces se representa como un monstruo con cuernos y colmillos.",
    "foto": "enlace_a_la_imagen_shuten_doji.jpg"
  },
  {
    "nombre": "Onibi",
    "tipo": "Fenomeno Natural",
    "desc": "Llamas espirituales que se manifiestan en lugares donde ha ocurrido una tragedia. A menudo se ven como luces parpadeantes en la oscuridad.",
    "foto": "enlace_a_la_imagen_onibi.jpg"
  },
  {
    "nombre": "Onikuma",
    "tipo": "Animal",
    "desc": "Oso demonio con poderes sobrenaturales. Se dice que acecha en las montañas y bosques, aterrorizando a aquellos que se aventuran demasiado lejos.",
    "foto": "enlace_a_la_imagen_onikuma.jpg"
  },
  {
    "nombre": "Onryō",
    "tipo": "Humanoide",
    "desc": "Espíritu vengativo que busca venganza por agravios pasados. A menudo son mujeres que han sufrido injusticias y regresan del más allá para castigar a sus opresores.",
    "foto": "enlace_a_la_imagen_onryo.jpg"
  },
  {
    "nombre": "Ōnyūdō",
    "tipo": "Humanoide",
    "desc": "Monje gigante con poderes sobrenaturales. A veces se le representa llevando una gran vara y asustando a aquellos que se cruzan en su camino.",
    "foto": "enlace_a_la_imagen_onyudo.jpg"
  },
  {
    "nombre": "Osaki",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu que habita en los arrozales y campos. Se cree que protege las cosechas y puede traer buena o mala fortuna a los agricultores.",
    "foto": "enlace_a_la_imagen_osaki.jpg"
  },
  {
    "nombre": "Otoroshi",
    "tipo": "Fenomeno Natural",
    "desc": "Guardián espiritual que protege los templos y santuarios. A menudo se representa como una figura monstruosa que ahuyenta a los espíritus malignos.",
    "foto": "enlace_a_la_imagen_otoroshi.jpg"
  },
  {
    "nombre": "OuniRaijū",
    "tipo": "Animal",
    "desc": "Bestia con forma de trueno que se cree que causa tormentas eléctricas. A veces se representa como un león con cuernos y una melena electrificada.",
    "foto": "enlace_a_la_imagen_ouni_raij.jpg"
  },
  {
    "nombre": "Rokurokubi",
    "tipo": "Humanoide",
    "desc": "Mujer con la capacidad de alargar su cuello. Durante el día, puede parecer una persona normal, pero por la noche su cuello se estira de manera sobrenatural.",
    "foto": "enlace_a_la_imagen_rokurokubi.jpg"
  },
  {
    "nombre": "Samebito",
    "tipo": "Animal",
    "desc": "Tiburón demoníaco que vive en aguas profundas. Se dice que puede cambiar de forma y a menudo se asocia con la aparición de tormentas en el mar.",
    "foto": "enlace_a_la_imagen_samebito.jpg"
  },
  {
    "nombre": "Sankai",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu que controla las montañas y los paisajes. Puede manifestarse como fenómenos naturales, como deslizamientos de tierra o terremotos.",
    "foto": "enlace_a_la_imagen_sankai.jpg"
  },
  {
    "nombre": "Satori",
    "tipo": "Humanoide",
    "desc": "Criatura con la habilidad de leer la mente de los humanos. A menudo se representa como un mono con aspecto humano.",
    "foto": "enlace_a_la_imagen_satori.jpg"
  },
  {
    "nombre": "Sazae-oni",
    "tipo": "Animal",
    "desc": "Caracol demoníaco que puede transformarse en una mujer hermosa. Engaña a los desprevenidos para luego revelar su verdadera forma y causar problemas.",
    "foto": "enlace_a_la_imagen_sazae_oni.jpg"
  },
  {
    "nombre": "Shachihoko",
    "tipo": "Animal",
    "desc": "Criatura marina con la cabeza de un tigre y el cuerpo de un pez. A menudo se coloca en los tejados de los castillos como símbolo de protección.",
    "foto": "enlace_a_la_imagen_shachihoko.jpg"
  },
  {
    "nombre": "Shidaidaka",
    "tipo": "Planta",
    "desc": "Árbol espiritual que otorga bendiciones a aquellos que lo veneran. Se cree que tiene propiedades curativas y puede influir en el crecimiento de las plantas circundantes.",
    "foto": "enlace_a_la_imagen_shidaidaka.jpg"
  },
  {
    "nombre": "Shikigami",
    "tipo": "Tsukumogami",
    "desc": "Espíritus invocados por los practicantes de la magia. Pueden tomar diversas formas y realizar tareas encomendadas por sus amos.",
    "foto": "enlace_a_la_imagen_shikigami.jpg"
  },
  {
    "nombre": "Shinigami",
    "tipo": "Humanoide",
    "desc": "Dios de la muerte en la mitología japonesa. Su tarea es guiar a las almas al más allá y juzgar a los fallecidos.",
    "foto": "enlace_a_la_imagen_shinigami.jpg"
  },
  {
    "nombre": "Shiranui",
    "tipo": "Fenomeno Natural",
    "desc": "Fenómeno de luces misteriosas que aparecen sobre el agua. A menudo se asocia con leyendas de barcos fantasmas y tesoros hundidos.",
    "foto": "enlace_a_la_imagen_shiranui.jpg"
  },
  {
    "nombre": "Shirime",
    "tipo": "Humanoide",
    "desc": "Criatura con cuerpo humano y un ojo en lugar de ano. A menudo asusta a los desprevenidos mostrándoles su inusual característica.",
    "foto": "enlace_a_la_imagen_shirime.jpg"
  },
  {
    "nombre": "Shiryō",
    "tipo": "Humanoide",
    "desc": "Espíritu fantasmagórico que vaga entre el mundo de los vivos y los muertos. Se cree que son almas atormentadas en busca de redención.",
    "foto": "enlace_a_la_imagen_shiryo.jpg"
  },
  {
    "nombre": "Shōjō",
    "tipo": "Humanoide",
    "desc": "Criatura alcohólica con piel roja y ojos vidriosos. Se dice que son sirenas que se embriagan con sake y poseen habilidades místicas.",
    "foto": "enlace_a_la_imagen_shojo.jpg"
  },
  {
    "nombre": "Shōkera",
    "tipo": "Humanoide",
    "desc": "Monje malévolo que practica magia oscura. Se cree que poseen poderes sobrenaturales y pueden causar daño a quienes se crucen en su camino.",
    "foto": "enlace_a_la_imagen_shokera.jpg"
  },
  {
    "nombre": "Shussebora",
    "tipo": "Animal",
    "desc": "Cerdo místico que concede prosperidad y éxito en la vida. A menudo se asocia con la buena fortuna y la abundancia.",
    "foto": "enlace_a_la_imagen_shussebora.jpg"
  },
  {
    "nombre": "Sōjōbō",
    "tipo": "Humanoide",
    "desc": "Rey de los Tengu y líder de los espíritus de las montañas. Se le atribuyen habilidades sobrenaturales y se le considera un protector de la naturaleza.",
    "foto": "enlace_a_la_imagen_sojobo.jpg"
  },
  {
    "nombre": "Sunekosuri",
    "tipo": "Animal",
    "desc": "Criatura pequeña que frota sus patas contra las piernas de las personas. Se dice que trae buena suerte a aquellos que encuentran su camino.",
    "foto": "enlace_a_la_imagen_sunekosuri.jpg"
  },
  {
    "nombre": "Takaonna",
    "tipo": "Humanoide",
    "desc": "Mujer con cabeza de halcón. Se le atribuyen poderes místicos y se cree que puede predecir el futuro.",
    "foto": "enlace_a_la_imagen_takaonna.jpg"
  },
  {
    "nombre": "Tanuki",
    "tipo": "Animal",
    "desc": "Mapache japonés con la capacidad de cambiar de forma. Se le asocia con la astucia y la diversión, pero también puede ser malicioso.",
    "foto": "enlace_a_la_imagen_tanuki.jpg"
  },
  {
    "nombre": "Danzaburou-danuki",
    "tipo": "Animal",
    "desc": "Variante del tanuki con habilidades mágicas. A menudo se le representa con una botella de sake y una gran bolsa de dinero.",
    "foto": "enlace_a_la_imagen_danzaburou_danuki.jpg"
  },
  {
    "nombre": "Inugami",
    "tipo": "Humanoide",
    "desc": "Espíritu canino invocado a través de rituales oscuros. Se cree que puede traer bendiciones o maldiciones dependiendo de la voluntad del invocador.",
    "foto": "enlace_a_la_imagen_inugami.jpg"
  },
  {
    "nombre": "Gyōbu",
    "tipo": "Humanoide",
    "desc": "Espíritu marino con apariencia de anciano. A menudo se le representa con largas barbas y cabello, y puede controlar las olas del mar.",
    "foto": "enlace_a_la_imagen_gyobu.jpg"
  },
  {
    "nombre": "Shibaemon-tanuki",
    "tipo": "Animal",
    "desc": "Variante del tanuki que se asemeja a un perro. Aunque comparte algunas características con el tanuki, tiene sus propias leyendas y atributos.",
    "foto": "enlace_a_la_imagen_shibaemon_tanuki.jpg"
  },
  {
    "nombre": "Yashima no Hage-tanuki",
    "tipo": "Animal",
    "desc": "Tanuki calvo con piel arrugada. Aunque no tiene la apariencia clásica del tanuki, comparte su naturaleza juguetona y bromista.",
    "foto": "enlace_a_la_imagen_yashima_no_hage_tanuki.jpg"
  },
  {
    "nombre": "Ten",
    "tipo": "Humanoide",
    "desc": "Criatura celeste y benevolente que vive en el cielo. Se le asocia con la buena fortuna y la protección divina.",
    "foto": "enlace_a_la_imagen_ten.jpg"
  },
  {
    "nombre": "Tengu",
    "tipo": "Humanoide",
    "desc": "Espíritu de la montaña con características de ave. Aunque pueden ser maliciosos, también se les atribuyen habilidades protectoras y sabiduría.",
    "foto": "enlace_a_la_imagen_tengu.jpg"
  },
  {
    "nombre": "Tennin",
    "tipo": "Humanoide",
    "desc": "Criatura celestial similar a un ángel en la mitología japonesa. Son seres benevolentes asociados con la música, la danza y la protección divina.",
    "foto": "enlace_a_la_imagen_tennin.jpg"
  },
  {
    "nombre": "Tenome",
    "tipo": "Humanoide",
    "desc": "Espíritu con un ojo gigante en la palma de su mano. Se dice que vaga por la noche y asusta a aquellos que se cruzan en su camino.",
    "foto": "enlace_a_la_imagen_tenome.jpg"
  },
  {
    "nombre": "Tesso",
    "tipo": "Animal",
    "desc": "Ratón con habilidades mágicas y la capacidad de controlar el hierro. Se le atribuye la destrucción de armaduras y armas con su poder.",
    "foto": "enlace_a_la_imagen_tesso.jpg"
  },
  {
    "nombre": "Tōfu-kozō",
    "tipo": "Tsukumogami",
    "desc": "Espíritu de un trozo de tofu que ha cobrado vida. Aunque puede parecer inofensivo, a veces realiza travesuras o actos maliciosos.",
    "foto": "enlace_a_la_imagen_tofu_kozo.jpg"
  },
  {
    "nombre": "Tsuchigumo",
    "tipo": "Animal",
    "desc": "Araña demoníaca de gran tamaño. Se cree que habita en las montañas y bosques, y a menudo es retratada como una amenaza para los viajeros.",
    "foto": "enlace_a_la_imagen_tsuchigumo.jpg"
  },
  {
    "nombre": "Tsuchinoko",
    "tipo": "Animal",
    "desc": "Criatura serpentiforme con cuerpo grueso y corto. Se dice que tiene la capacidad de hablar y, a veces, concede buena suerte a quienes lo encuentran.",
    "foto": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Tsuchinoko_photo_01.jpg"
  },
  {
    "nombre": "Tsurara-onna",
    "tipo": "Humanoide",
    "desc": "Mujer congelada que aparece en noches frías de invierno. Puede aparecer como una hermosa mujer para luego revelar su naturaleza helada.",
    "foto": "enlace_a_la_imagen_tsurara_onna.jpg"
  },
  {
    "nombre": "Tsurubebi",
    "tipo": "Fenomeno Natural",
    "desc": "Luz misteriosa que aparece sobre pozos y cuerpos de agua. Se cree que son espíritus o fenómenos naturales asociados con la presencia de agua.",
    "foto": "enlace_a_la_imagen_tsurubebi.jpg"
  },
  {
    "nombre": "Tsurube-otoshi",
    "tipo": "Fenomeno Natural",
    "desc": "Criatura misteriosa que se asemeja a un cubo o cubeta que cuelga de un árbol. A veces, cae sobre los desprevenidos para asustarlos o atraparlos.",
    "foto": "enlace_a_la_imagen_tsurube_otoshi.jpg"
  },
  {
    "nombre": "Ubagabi",
    "tipo": "Humanoide",
    "desc": "Espíritu femenino que se manifiesta como una anciana. A veces, se le asocia con la maternidad y la protección de los niños.",
    "foto": "enlace_a_la_imagen_ubagabi.jpg"
  },
  {
    "nombre": "Ubume",
    "tipo": "Humanoide",
    "desc": "Fantasma de una mujer que murió durante el parto. A menudo se le representa llevando a un bebé y buscando ayuda para su hijo.",
    "foto": "enlace_a_la_imagen_ubume.jpg"
  },
  {
    "nombre": "Umibōzu",
    "tipo": "Fenomeno Natural",
    "desc": "Monstruo marino gigante que habita en aguas profundas. Se dice que puede aparecer repentinamente para atacar a los marineros y hundir barcos.",
    "foto": "enlace_a_la_imagen_umibozu.jpg"
  },
  {
    "nombre": "Umi zatō",
    "tipo": "Humanoide",
    "desc": "Monje ciego que camina por las playas y profetiza desastres. Se cree que su presencia anuncia tormentas y problemas en el mar.",
    "foto": "enlace_a_la_imagen_umi_zato.jpg"
  },
  {
    "nombre": "Ungaikyō",
    "tipo": "Tsukumogami",
    "desc": "Espejo antiguo que ha cobrado vida. A veces se le atribuyen habilidades místicas y la capacidad de mostrar ilusiones.",
    "foto": "enlace_a_la_imagen_ungaikyo.jpg"
  },
  {
    "nombre": "Ushi-oni",
    "tipo": "Animal",
    "desc": "Bestia marina con cabeza de toro y cuerpo de araña o cangrejo. A menudo se le asocia con la aparición repentina en el mar y el ataque a embarcaciones.",
    "foto": "enlace_a_la_imagen_ushi_oni.jpg"
  },
  {
    "nombre": "Uwan",
    "tipo": "Fenomeno Natural",
    "desc": "Sonido misterioso y aterrador que se escucha en las montañas y bosques. Su origen es desconocido y a menudo se asocia con presencias sobrenaturales.",
    "foto": "enlace_a_la_imagen_uwan.jpg"
  },
  {
    "nombre": "Waira",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu del viento que se manifiesta como una ráfaga repentina y fuerte. Puede ser tanto benévolo como malévolo, dependiendo de su estado de ánimo.",
    "foto": "enlace_a_la_imagen_waira.jpg"
  },
  {
    "nombre": "Wanyūdō",
    "tipo": "Tsukumogami",
    "desc": "Carro antiguo que cobra vida como espíritu vengativo. Se dice que persigue a aquellos que han cometido crímenes y los lleva al inframundo.",
    "foto": "enlace_a_la_imagen_wanyudo.jpg"
  },
  {
    "nombre": "Yamabiko",
    "tipo": "Fenomeno Natural",
    "desc": "Eco de montaña que imita los sonidos de las personas. A veces se le considera un espíritu juguetón que responde a los gritos y ruidos en las montañas.",
    "foto": "enlace_a_la_imagen_yamabiko.jpg"
  },
  {
    "nombre": "Yamawaro",
    "tipo": "Humanoide",
    "desc": "Pequeño ser de las montañas con apariencia humana. Aunque suele ser inofensivo, a veces puede jugar bromas a los viajeros o asustarlos.",
    "foto": "enlace_a_la_imagen_yamawaro.jpg"
  },
  {
    "nombre": "Yamajijii",
    "tipo": "Animal",
    "desc": "Criatura misteriosa con apariencia de ciervo que habita en las montañas. Se le atribuyen poderes sobrenaturales y a veces se le considera un protector de la naturaleza.",
    "foto": "enlace_a_la_imagen_yamajijii.jpg"
  },
  {
    "nombre": "Yama-uba",
    "tipo": "Humanoide",
    "desc": "Bruja de las montañas que se disfraza de mujer amable para atraer a los viajeros. Puede ser tanto benevolente como malévola, dependiendo de sus intenciones.",
    "foto": "enlace_a_la_imagen_yama_uba.jpg"
  },
  {
    "nombre": "Yanari",
    "tipo": "Fenomeno Natural",
    "desc": "Sonido misterioso que se escucha en las montañas y se atribuye a la actividad espiritual. A veces se asocia con la presencia de yokais o espíritus.",
    "foto": "enlace_a_la_imagen_yanari.jpg"
  },
  {
    "nombre": "Yobuko",
    "tipo": "Humanoide",
    "desc": "Espíritu que llama a los viajeros en la oscuridad de las montañas. Puede ser un ser travieso que busca asustar a los desprevenidos.",
    "foto": "enlace_a_la_imagen_yobuko.jpg"
  },
  {
    "nombre": "Yōsei",
    "tipo": "Humanoide",
    "desc": "Criatura mágica y etérea similar a las hadas. A menudo se le asocia con la naturaleza y se cree que posee poderes místicos.",
    "foto": "enlace_a_la_imagen_yosei.jpg"
  },
  {
    "nombre": "Yosuzume",
    "tipo": "Animal",
    "desc": "Pájaro misterioso que se cree trae malas noticias o desgracias. Su canto se considera un presagio de eventos negativos.",
    "foto": "enlace_a_la_imagen_yosuzume.jpg"
  },
  {
    "nombre": "Yuki-onna",
    "tipo": "Fenomeno Natural",
    "desc": "Mujer espectral de la nieve que aparece en noches frías. Puede ser benevolente o malévola, y su presencia se asocia con tormentas de nieve.",
    "foto": "enlace_a_la_imagen_yuki_onna.jpg"
  },
  {
    "nombre": "Yume no seirei",
    "tipo": "Fenomeno Natural",
    "desc": "Espíritu de los sueños que se cree visita a las personas mientras duermen. A veces se le atribuyen mensajes proféticos o visiones oníricas.",
    "foto": "enlace_a_la_imagen_yume_no_seirei.jpg"
  },
  {
    "nombre": "Zashiki-warashi",
    "tipo": "Humanoide",
    "desc": "Espíritu infantil que habita en las casas y trae buena suerte a sus residentes. Se dice que la desaparición de este yokai puede traer desgracias.",
    "foto": "enlace_a_la_imagen_zashiki_warashi.jpg"
  }
  
];

mongoose.connect(DB_URL).then(async ()=> {
    const allYokais = await Yokai.find();
    if (allYokais.length > 0) {
        await Yokai.collection.drop();
        console.log("Yokais borrados");
    }
}).catch((error) => console.log("error borrando yokais", error)).then(async () => {
    const yokaiMap = arrayYokais.map((yokai) => new Yokai(yokai))
    await Yokai.insertMany(yokaiMap);
    console.log("Yokais insertados correctamente");
}).catch((error) => console.log("error insertando yokais", error)).finally(() => mongoose.disconnect())
  