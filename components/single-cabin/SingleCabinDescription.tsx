import TextExpander from "../Global/TextExpander";

const SingleCabinDescription = ({ description }: { description: string }) => {
  return (
    <div>
      <p className="text-lg font-semibold my-4 text-primary">{description}</p>
      <TextExpander max={100} className="leading-loose">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolores
        mollitia amet sit molestiae recusandae fugiat neque quis. Sapiente
        eligendi culpa, deserunt molestias, ea repudiandae ad accusantium esse
        ducimus maiores quidem autem rem odit ipsum nostrum impedit nesciunt,
        vel incidunt similique consequatur ratione amet illum. Magnam facilis
        porro placeat, consectetur ab molestias minus rem sequi reprehenderit
        dolor maiores odit iure voluptatibus in! Minima iste dolore velit
        aliquid molestias laudantium harum perspiciatis ab impedit delectus
        dolor expedita non voluptas reprehenderit tempora, consequatur atque
        ratione accusamus obcaecati, officiis assumenda. Reiciendis atque
        accusantium repudiandae magnam exercitationem obcaecati velit assumenda,
        totam alias non? Quam ad neque eius ullam iste quis facilis molestias,
        molestiae voluptates tempora minima ipsum inventore fugiat quae
        obcaecati cumque, qui, nam provident blanditiis praesentium doloribus
        dolor totam. Voluptatum sunt libero officiis quidem accusantium ut
        suscipit, omnis minima fuga, repudiandae, provident iusto placeat modi
        autem culpa quasi possimus quod dolorem dicta similique rem. Eaque esse
        quidem provident similique corporis quisquam possimus dolores sequi,
        tenetur odio dolor nobis. Animi ad, ipsa eligendi et, sint similique
        sequi laboriosam unde sapiente, voluptate quos aut illum blanditiis!
        Pariatur dolor ipsam nam maxime exercitationem beatae, dignissimos,
        similique accusamus iusto a ullam consequuntur quae minima minus, sed
        tenetur.
      </TextExpander>
    </div>
  );
};
export default SingleCabinDescription;
