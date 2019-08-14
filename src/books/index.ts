export class index {
    message;
    // bookItems;
    pokemonItems;
    defaultValue;



    constructor(){
        this.message = 'Pokemon library';
        
        // this.bookItems = JSON.parse(localStorage.getItem('Users'));
        this.pokemonItems = [
            {
              name :"Bulbasaur",
              category: "grass/poison",
              imageSource: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              description: " Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I.",
              color:"grass"
            },
            {
              name :"Charmander",
              category: "fire",
              imageSource: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              description: " Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I.",
              color: "fire"
            },
            {
              name :"Squirtle",
              category: "water",
              imageSource: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
              description: "Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I..",
              color:"water"
              
            },
            {
              name :"Pidgey ",
              category: "flying",
              imageSource: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
              description: "Pidgey (Japanese: ポッポ Poppo) is a dual-type Normal/Flying Pokémon introduced in Generation I."
            }
        ];
        
        this.defaultValue = model => model.name;
      }
}