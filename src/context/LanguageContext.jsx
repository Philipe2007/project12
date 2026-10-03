import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext(null);

const french = {
  Home: 'Accueil', Services: 'Services', Gallery: 'Galerie', 'About Us': 'À propos', Contact: 'Contact',
  'Call now': 'Appeler', 'Book Now': 'Réserver', 'Book now': 'Réserver', 'Book online': 'Réserver en ligne',
  'Book this service': 'Réserver ce service', 'View services': 'Voir les services', 'See all services': 'Voir tous les services',
  'Our services': 'Nos services', 'Our customers': 'Nos clientes', 'Why women choose us': 'Pourquoi nous choisir',
  'Client reviews': 'Avis des clientes', 'Customer spotlight': 'À l’honneur', 'Visit the studio': 'Visitez le salon',
  'Book your appointment': 'Réservez votre rendez-vous', 'Book with us': 'Réservez avec nous',
  'Relaxing time.': 'Un moment de détente.', 'Perfect look.': 'Un look parfait.',
  'European-style beauty care in a calm, welcoming studio, designed around your comfort and confidence.': 'Des soins de beauté d’inspiration européenne dans un studio accueillant et apaisant, pensé pour votre confort et votre confiance.',
  'Our main services': 'Nos principaux services', Hair: 'Coiffure', 'Skin Care': 'Soins de la peau', 'Hair Removal': 'Épilation', Braiding: 'Tresses', 'Eyebrow Tint': 'Teinture des sourcils',
  'We speak English and French.': 'Nous parlons anglais et français.',
  'Beauty treatments created to match your style.': 'Des soins de beauté adaptés à votre style.',
  'Browse our full menu, then call or WhatsApp us to confirm availability and pricing.': 'Consultez notre menu complet, puis appelez-nous ou contactez-nous sur WhatsApp pour confirmer les disponibilités et les tarifs.',
  'Beautiful work, made for every customer.': 'De belles créations, pour chacune de nos clientes.',
  'Explore real customer styles from Delphine Beauty Studio, then visit us for your own personalized look.': 'Découvrez les styles de nos clientes chez Delphine Beauty Studio, puis venez créer votre look personnalisé.',
  'A quick look around the salon and how to find us.': 'Découvrez le salon et comment nous trouver.',
  'Use the video and location photo together to make your visit easier and feel more confident before you arrive.': 'La vidéo et la photo du lieu vous aideront à préparer votre visite en toute confiance.',
  'Real looks created for our customers.': 'Des styles réels créés pour nos clientes.',
  'Browse a selection of styles, color and beauty looks from the Delphine Beauty Studio chair.': 'Découvrez une sélection de coiffures, de couleurs et de soins réalisés chez Delphine Beauty Studio.',
  'A salon experience designed around your confidence, comfort and style.': 'Une expérience en salon pensée pour votre confiance, votre confort et votre style.',
  'Women keep returning because they feel beautiful and cared for.': 'Nos clientes reviennent parce qu’elles se sentent belles et choyées.',
  'Ready to look your best? Book in seconds.': 'Envie de révéler votre beauté ? Réservez en quelques secondes.',
  'Pick your service, choose a date and send your appointment request directly to WhatsApp.': 'Choisissez votre prestation et une date, puis envoyez votre demande directement sur WhatsApp.',
  'Most popular': 'Les plus populaires', Availability: 'Disponibilités', 'Open Tuesday–Sunday': 'Ouvert du mardi au dimanche',
  '5-star': '5 étoiles', Daily: 'Chaque jour', Local: 'Local', 'Walk-ins': 'Sans rendez-vous', 'beauty care': 'soins beauté', appointments: 'rendez-vous',
  welcome: 'Bienvenue',
  'About us': 'À propos de nous', 'Women, Men and Children Saloon built around a comfort, beauty and trust.': 'Un salon pour femmes, hommes et enfants, fondé sur le confort, la beauté et la confiance.',
  'Delphine Beauty Studio is a Bonita Springs beauty studio focused on professional hair styling, quality products, comfort and customer experience.': 'Delphine Beauty Studio, à Bonita Springs, met l’accent sur la coiffure professionnelle, des produits de qualité, le confort et l’expérience client.',
  'We believe every woman deserves a salon experience that feels polished, calm and personal. Our team focuses on premium hair care, beautiful finishes and honest guidance to help you choose the look that best suits you.': 'Nous pensons que chaque femme mérite une expérience en salon soignée, apaisante et personnelle. Notre équipe privilégie les soins capillaires haut de gamme, les finitions impeccables et des conseils honnêtes pour vous aider à choisir le style qui vous convient.',
  'From braids and weaves to bridal styling and hair colour, we combine modern techniques with warm customer care in a clean, welcoming environment.': 'Des tresses et extensions aux coiffures de mariée et à la coloration, nous associons des techniques modernes à un accueil chaleureux dans un espace propre et convivial.',
  'Our mission': 'Notre mission', 'To deliver confident, beautiful results in a calm and professional environment.': 'Offrir des résultats magnifiques qui donnent confiance, dans un cadre calme et professionnel.',
  'Our values': 'Nos valeurs', 'Honesty, comfort, quality and care in every appointment.': 'L’honnêteté, le confort, la qualité et l’attention à chaque rendez-vous.',
  'Professional stylists': 'Coiffeuses professionnelles', 'Skilled specialists delivering polished work with attention to detail.': 'Des spécialistes qualifiées qui réalisent un travail soigné avec le souci du détail.',
  'Clean environment': 'Un environnement propre', 'A hygienic, women-only space where you can relax and feel safe.': 'Un espace réservé aux femmes, propre et hygiénique, où vous pouvez vous détendre en toute sérénité.',
  'Contact us': 'Contactez-nous', 'Book a visit, ask about a style, or order a product.': 'Prenez rendez-vous, demandez conseil sur un style ou commandez un produit.',
  'A welcoming beauty studio in Bonita Springs offering cuts, color, styling, treatments and bridal beauty.': 'Un studio de beauté accueillant à Bonita Springs proposant coupes, colorations, coiffage, soins et beauté nuptiale.',
  'See our customer work, then contact us to plan your next look.': 'Découvrez nos réalisations, puis contactez-nous pour préparer votre prochain look.',
  'Get directions': 'Itinéraire', Name: 'Nom', Phone: 'Téléphone', Message: 'Message', 'Your name': 'Votre nom', 'Tell us what you need': 'Dites-nous ce dont vous avez besoin', 'Send via WhatsApp': 'Envoyer sur WhatsApp',
  'Service category': 'Catégorie de prestations', 'Choose the kind of services you need.': 'Choisissez le type de prestations souhaité.',
  'Tap a category to see every service, pick what you want and book in seconds.': 'Choisissez une catégorie pour voir les prestations, sélectionnez celles qui vous intéressent et réservez en quelques secondes.',
  'Choose from the services in this category, then book online or contact us to confirm your appointment.': 'Choisissez parmi les prestations de cette catégorie, puis réservez en ligne ou contactez-nous pour confirmer votre rendez-vous.',
  'Why choose us': 'Pourquoi nous choisir', 'Professional care, premium results.': 'Un service professionnel, des résultats haut de gamme.',
  'Hygienic salon': 'Salon hygiénique', 'Trusted stylists': 'Coiffeuses de confiance', 'Related services': 'Prestations associées', 'More beauty options for your next visit.': 'Plus de soins beauté pour votre prochaine visite.',
  Explore: 'Découvrir', 'Ready to book your next look?': 'Prête à réserver votre prochain look ?', 'View & book': 'Voir et réserver', 'services': 'prestations', 'more': 'de plus',
  'Walk-ins are welcome when space allows': 'Les visites sans rendez-vous sont possibles selon les disponibilités.', 'Booking online guarantees your slot': 'La réservation en ligne garantit votre créneau.', 'Call us to confirm availability and payment options': 'Appelez-nous pour confirmer les disponibilités et les moyens de paiement.',
  'Booking': 'Réservation', 'Book your next salon appointment': 'Réservez votre prochain rendez-vous au salon.', 'Easy online booking for braids, weaves, bridal styling and hair care.': 'Réservation en ligne facile pour les tresses, extensions, coiffures de mariée et soins capillaires.',
  'What can we do for you?': 'Que pouvons-nous faire pour vous ?', 'When works for you?': 'Quelle date vous convient ?', 'Your details': 'Vos coordonnées', 'Booking summary': 'Récapitulatif de réservation',
  'Booking requested': 'Demande de réservation envoyée', 'Your request has been prepared in WhatsApp. We will confirm your appointment soon.': 'Votre demande a été préparée dans WhatsApp. Nous confirmerons bientôt votre rendez-vous.',
  'Explore services': 'Découvrir les prestations', 'Not sure yet — help me decide': 'Vous hésitez ? Aidez-moi à choisir', 'Book a free 15-minute consultation with our team.': 'Réservez une consultation gratuite de 15 minutes avec notre équipe.',
  Morning: 'Matin', Afternoon: 'Après-midi', Evening: 'Soir', 'Full name': 'Nom complet', 'Phone / WhatsApp number': 'Téléphone / numéro WhatsApp', Notes: 'Remarques', 'Tell us the look you want or any special requests': 'Décrivez le look souhaité ou toute demande particulière',
  Service: 'Prestation', Duration: 'Durée', Date: 'Date', Time: 'Heure', Price: 'Prix', Deposit: 'Acompte', 'Payment options': 'Options de paiement', 'Card payment': 'Paiement par carte', 'Contact the studio': 'Contacter le salon', 'Cash at salon': 'Espèces au salon', 'Applied toward your service total at the salon.': 'Déduit du montant total de votre prestation au salon.',
  Prev: 'Précédent', 'Next step': 'Étape suivante', 'Continue to Square booking': 'Continuer la réservation Square',
  'Call for pricing': 'Prix sur demande', Variable: 'Variable', 'Book on WhatsApp': 'Réserver sur WhatsApp', All: 'Tout', Added: 'Ajouté', Add: 'Ajouter', Clear: 'Effacer', 'Tap the services you want to book': 'Sélectionnez les prestations à réserver', 'selected': 'sélectionnée(s)', 'Estimated total': 'Total estimé', 'Price confirmed by the salon': 'Prix à confirmer par le salon', 'to be quoted': 'à chiffrer',
  'Open daily': 'Ouvert tous les jours', 'Closes at 5:00 PM': 'Ferme à 17 h', 'Proudly serving Bonita Springs, Florida': 'Au service de Bonita Springs, en Floride', Follow: 'Suivez-nous', 'Follow us': 'Suivez-nous',
  'Experienced stylists': 'Coiffeuses expérimentées', 'Transparent prices': 'Tarifs transparents', 'Clean, welcoming space': 'Un espace propre et accueillant', 'Easy online booking': 'Réservation en ligne facile', 'Salon-grade products': 'Produits professionnels',
  'Years of expertise in braids, weaves, colour and natural hair styling.': 'Une solide expérience des tresses, extensions, colorations et coiffures naturelles.', 'Clear prices in dollars with no hidden costs and easy payment options.': 'Des tarifs clairs en dollars, sans frais cachés, et des options de paiement simples.', 'A calm and hygienic salon designed around your comfort and style.': 'Un salon calme et hygiénique, pensé pour votre confort et votre style.', 'Reserve your chair quickly and get confirmation through WhatsApp.': 'Réservez rapidement et recevez une confirmation sur WhatsApp.', 'Trusted products for healthy-looking hair and long-lasting results.': 'Des produits fiables pour des cheveux sains et des résultats durables.',
  'Cuts, color, braids and treatments for every hair type.': 'Coupes, colorations, tresses et soins pour tous les types de cheveux.', 'Facials, brows and waxing to finish your look.': 'Soins du visage, sourcils et épilation pour parfaire votre look.', 'Bundle your color or texture service and save time in the chair.': 'Associez vos prestations de coloration ou de texture et gagnez du temps au salon.', 'Upgrade any visit with extra care, styling or color.': 'Complétez votre visite avec un soin, une mise en forme ou une coloration supplémentaire.',
  'Precision cuts, blowouts, silk press and event-ready updos.': 'Coupes précises, brushings, silk press et chignons pour vos événements.', 'Root touch-ups, gloss and gray coverage for rich, even color.': 'Retouches des racines, gloss et couverture des cheveux gris pour une couleur uniforme.', 'Foil or hand-painted highlights for soft, natural dimension.': 'Mèches au papier ou peintes à la main pour un effet lumineux et naturel.', 'Neat, long-lasting styles that protect your natural hair. Final price depends on size and length.': 'Des coiffures soignées et durables qui protègent vos cheveux naturels. Le prix final dépend de la taille et de la longueur.', 'Smooth, straighten or add curl and texture.': 'Lissez, défrisez ou apportez des boucles et de la texture.', 'Deep conditioning, repair and scalp care for healthier hair.': 'Hydratation intense, réparation et soins du cuir chevelu pour des cheveux plus sains.', 'Skin-refreshing facials, eyebrow tint and facial waxing.': 'Soins du visage revitalisants, teinture des sourcils et épilation du visage.', 'A complete color service bundled into one visit.': 'Une prestation complète de coloration réunie en un seul rendez-vous.', 'Root coverage with seamless blending close to the scalp.': 'Une couverture des racines avec un fondu naturel près du cuir chevelu.', 'Texture treatments for definition, softness and shine.': 'Des soins texturisants pour définir, adoucir et faire briller les cheveux.', 'Add a repair or moisture treatment to any service.': 'Ajoutez un soin réparateur ou hydratant à votre prestation.', 'A smoother finish, extra shaping or longer-lasting hold.': 'Une finition plus lisse, une mise en forme supplémentaire ou une tenue prolongée.', 'Extra color work for dimension and tone balance.': 'Un supplément de coloration pour apporter du relief et équilibrer les tons.',
  'Haircuts & Styling': 'Coupes et coiffage', 'Hair Color': 'Coloration', 'Highlights & Balayage': 'Mèches et balayage', 'Braids & Protective Styles': 'Tresses et coiffures protectrices', 'Keratin, Relaxer & Perm': 'Kératine, défrisage et permanente', Treatments: 'Soins capillaires', 'Facials & Brows': 'Visage et sourcils', 'Color Packages': 'Forfaits coloration', 'Root Color Packages': 'Forfaits coloration des racines', 'Texture Packages': 'Forfaits texture', 'Treatments Add-ons': 'Soins complémentaires', 'Styling Upgrades': 'Options de coiffage', 'Additional Color': 'Coloration supplémentaire',
  "Ladies' Signature Haircut": 'Coupe signature femme', "Gentlemen's Cut": 'Coupe homme', 'Classic Blowout': 'Brushing classique', 'Silk Press': 'Silk press', 'Special Occasion Updo': 'Chignon pour occasion spéciale', 'Root Touch-Up': 'Retouche des racines', 'Root Touch-Up + Gloss': 'Retouche des racines + gloss', 'Express Color': 'Coloration express', 'Gray Blending / Color Camo': 'Camouflage des cheveux gris', 'Partial Foil': 'Mèches partielles au papier', 'Full Foil': 'Mèches complètes au papier', 'Partial Balayage': 'Balayage partiel', 'Full Balayage': 'Balayage complet', 'Specialty Highlights': 'Mèches spéciales', 'Platinum Card Highlights': 'Décoloration complète', 'Face-Framing / Accent Foil': 'Mèches contour du visage', 'Knotless Braids': 'Tresses sans nœuds', 'Box Braids': 'Tresses box braids', Cornrows: 'Nattes collées', Crochet: 'Tresses au crochet', 'Boho Braids': 'Tresses bohèmes', 'Sew-In / Sewing': 'Tissage cousu', Relaxer: 'Défrisage', Texturizer: 'Texturisant', Perm: 'Permanente', 'Specialty Perm': 'Permanente spéciale', 'Deep Conditioning Treatment': 'Soin revitalisant profond', 'Olaplex Treatment': 'Soin Olaplex', 'Anti-Stress Scalp Massage': 'Massage du cuir chevelu anti-stress', Facial: 'Soin du visage', 'Facial Waxing': 'Épilation du visage', 'Color Package': 'Forfait coloration', 'Root Color Package': 'Forfait coloration des racines', 'Texture Package': 'Forfait texture', 'Styling upgrades': 'Options de coiffage', 'Additional color': 'Coloration supplémentaire',
  'The style was beautiful, neat and exactly what I wanted. I felt confident the whole day.': 'La coiffure était magnifique, soignée et exactement comme je le souhaitais. Je me suis sentie en confiance toute la journée.',
  'I booked a bridal look and the finish was elegant and natural. It felt luxurious and personal.': 'J’ai réservé une coiffure de mariée, élégante et naturelle. L’expérience était luxueuse et personnalisée.',
  'The salon feels so warm and professional. My weave looked amazing and lasted beautifully.': 'Le salon est chaleureux et professionnel. Mon tissage était magnifique et a très bien tenu.',
  'Open daily · Closes at 5:00 PM': 'Ouvert tous les jours · Ferme à 17 h',
  'Open gallery image': 'Ouvrir la photo de la galerie', 'customer look': 'style cliente', 'Customer look': 'Style cliente', Close: 'Fermer', Previous: 'Précédent', Next: 'Suivant',
  'Chat on WhatsApp': 'Discuter sur WhatsApp', 'Customer wearing a finished braided hairstyle': 'Cliente portant une coiffure tressée', 'Salon tour video': 'Vidéo de visite du salon', 'Salon interior and stylists': 'Intérieur du salon et coiffeuses', 'Customer hairstyle from Delphine Beauty Studio': 'Coiffure réalisée chez Delphine Beauty Studio',
  Beauty: 'Beauté', Packages: 'Forfaits', 'Add-ons': 'Options', 'Real looks created in our salon.': 'Des styles authentiques créés dans notre salon.',
  'A complete color refresh package for tone, vibrancy and an even, polished finish.': 'Un forfait coloration complet pour raviver les tons et obtenir une finition uniforme et soignée.',
  'Perfect for low-maintenance root coverage and seamless blending close to the scalp.': 'Idéal pour couvrir les racines facilement et obtenir un fondu naturel près du cuir chevelu.',
  'A nourishing texture treatment package designed for definition, softness and shine.': 'Un forfait de soins texturisants nourrissants pour plus de définition, de douceur et de brillance.',
  'Add a deep-conditioning or repair treatment to restore moisture and smoothness.': 'Ajoutez un soin nourrissant ou réparateur pour restaurer l’hydratation et la douceur.',
  'Upgrade your style with a smoother finish, extra shaping or longer-lasting hold.': 'Sublimez votre coiffure avec une finition plus lisse, une mise en forme précise ou une tenue prolongée.',
  'Add extra color work for dimension, brighter tone balance or touch-up coverage.': 'Ajoutez de la couleur pour créer du relief, raviver les tons ou couvrir les racines.',
  Instagram: 'Instagram', Facebook: 'Facebook', Customer: 'Cliente', 'Not provided': 'Non renseigné', 'Booking request': 'Demande de rendez-vous',
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      return localStorage.getItem('delphine-language') === 'fr' ? 'fr' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('delphine-language', language);
    } catch {
      // Language remains available for the current session if storage is disabled.
    }
  }, [language]);

  const t = (text) => (language === 'fr' ? french[text] || text : text);
  const translateService = (service) => {
    if (!service) return service;
    const translatedName = t(service.name);
    return {
      ...service,
      name: translatedName,
      category: t(service.category),
      duration: t(service.duration),
      priceLabel: t(service.priceLabel),
      description: language === 'fr'
        ? `Prestation ${translatedName} réalisée par notre équipe expérimentée de Delphine Beauty Studio. Contactez-nous pour confirmer la disponibilité et les tarifs.`
        : service.description,
    };
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translateService }}>
      {children}
    </LanguageContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};