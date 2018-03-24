import React from 'react';
import Section from '../Section';
import guitar2 from '../../../assets/images/guitar2.png';
import kurt1 from '../../../assets/images/kurt1.png';
import FeatureList from './FeatureList';
import featureItems from './featureItems.js';
import './Features.css';

const Features = (props) => (
  <Section id="features" title="Características">
    <img className="guitar2" src={guitar2} />
    <div className="col">
      {/* @todo: this text should come from a prop */}
      <p>
        Fender presenta uno de los modelos "signature" más característicos de su historia: la Kurt
        Cobain Jaguar, diseñada respetando los mínimos detalles de la particular y ajetreada Jaguar de 1965 que
        Cobain empuñara a principios de los años 90, cuando Nirvana reinaba en el rock y lideraba un movimiento
        sorprendente desde lo musical y subversivo hasta lo cultural.
      </p>
      <FeatureList items={featureItems} />
    </div>
    <img className="kurt1" src={kurt1} />
  </Section>
);

export default Features;
