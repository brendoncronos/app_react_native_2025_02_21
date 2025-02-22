import { Button } from "react-native";
import { TouchableOpacity } from "react-native/Libraries/Components/Touchable/TouchableOpacity";

type MeuBotaoProps = {
    titulo: string;
    onPress: () => void;
}

const MeuBotao: React.FC<MeuBotaoProps> = ({ titulo, onPress }) => {
    return (

        <Button onPress={onPress} title={titulo} color="#000">
            
        </Button>

      /*<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{titulo}</Text>
      </TouchableOpacity>*/
    );
  };
  

  export default MeuBotao;