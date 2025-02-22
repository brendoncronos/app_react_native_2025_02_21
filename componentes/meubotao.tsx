import { Button } from "react-native";
import { TouchableOpacity } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

type meubotaoProps = {
    titulo: string;
    onPress: () => void;
}

const meubotao: React.FC<meubotaoProps> = ({ titulo, onPress }) => {
    return (

        <Button onPress={onPress} title={titulo} color="#000">
            
        </Button>

      /*<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{titulo}</Text>
      </TouchableOpacity>*/
    );
  };
  

  export default meubotao;