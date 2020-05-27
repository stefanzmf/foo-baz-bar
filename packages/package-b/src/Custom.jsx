import React, { useEffect } from 'react';

const Custom = () => {

  useEffect(() => {
    const foo = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque magni necessitatibus obcaecati quas quod voluptate! Animi, reiciendis soluta? Aspernatur autem consequatur corporis delectus dolore fugiat itaque labore saepe tempora';

    const baz = foo.substr(10, 20);

    console.log(baz);
  }, [])

  return (
    <React.Fragment>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
        consequatur eius expedita nihil numquam obcaecati similique suscipit
        veritatis? Aliquam atque distinctio dolore ex excepturi explicabo
        facilis impedit laboriosam tempore voluptatibus.
      </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
        magni necessitatibus obcaecati quas quod voluptate! Animi, reiciendis
        soluta? Aspernatur autem consequatur corporis delectus dolore fugiat
        itaque labore saepe tempora.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
        magni necessitatibus obcaecati quas quod voluptate! Animi, reiciendis
        soluta? Aspernatur autem consequatur corporis delectus dolore fugiat
        itaque labore saepe tempora.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
        magni necessitatibus obcaecati quas quod voluptate! Animi, reiciendis
        soluta? Aspernatur autem consequatur corporis delectus dolore fugiat
        itaque labore saepe tempora.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
        magni necessitatibus obcaecati quas quod voluptate! Animi, reiciendis
        soluta? Aspernatur autem consequatur corporis delectus dolore fugiat
        itaque labore saepe tempora.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque
        magni necessitatibus obcaecati quas quod voluptate! Animi, reiciendis
        soluta? Aspernatur autem consequatur corporis delectus dolore fugiat
        itaque labore saepe tempora.</p>
    </React.Fragment>
  )
};

export default Custom;
