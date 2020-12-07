import React from 'react';
import Main from '../../shared/components/UIElements/Main/Main';
import PageHeaderImage from '../../shared/components/UIElements/PageHeaderImage/PageHeaderImage';
import './AboutScreen.css';

import './AboutScreen.css';

const AboutScreen = () => {
   return (
      <React.Fragment>
         <PageHeaderImage image="" title="About Me"/>
         <Main>
            <section id="about">
               <h2>Just a little about myself</h2>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean molestie, neque
                  at efficitur molestie, ante turpis aliquam libero, non congue massa dui et
                  libero. Nulla viverra libero in nibh semper, a cursus leo sodales.
               </p>
               <p>
                  Fusce ultrices urna purus, sit amet dictum leo pretium vel. Etiam tristique
                  sapien ut nisi vestibulum viverra. Fusce bibendum eros in felis condimentum
                  fermentum. Mauris enim odio, faucibus eget sodales facilisis, gravida tristique
                  mi. Donec finibus, metus ac erat elit vulputate mauris sollicitudin, a convallis
                  magna vestibulum. Proin finibus ante sed ultrices fringilla. Donec enim urna,
                  lacinia ut rhoncus ac, pulvinar in nulla. Cras in sem ac erat accumsan
                  efficitur.
               </p>
            </section>
         </Main>
      </React.Fragment>
   );
};

export default AboutScreen;
