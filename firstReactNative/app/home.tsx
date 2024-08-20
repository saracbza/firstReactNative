import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import ImageCDesc from '../components/imageCDesc'

export default function Home(){
return ( 
    <View>
        <Text> Login com sucesso! </Text>
        <Link href='/'> Voltar para Home</Link>
        <ImageCDesc url="https://m.media-amazon.com/images/I/61hLVV-0VWL.jpg" 
        desc="Rick é um cientista genial e alcoólatra, conhecido por seu comportamento excêntrico e habilidades de invenção. 
        Ele leva seu neto, Morty, em aventuras interdimensionais enquanto lida com seus próprios problemas pessoais e morais."
        />

        <ImageCDesc url="https://m.media-amazon.com/images/S/aplus-media-library-service-media/365e5edb-7b7f-415a-81c7-a848936e9e38.__CR0,0,300,300_PT0_SX300_V1___.jpg" 
        desc="Morty é o neto de Rick, um adolescente inseguro e frequentemente relutante em acompanhar as aventuras de seu avô. 
        Sua natureza ingênua e moral geralmente contrastam com as decisões muitas vezes antiéticas de Rick."
        />
        <ImageCDesc url="https://i.pinimg.com/originals/03/ec/e4/03ece45dc8a679c53837ae8c83f43b2f.jpg" 
        desc="Summer é a irmã mais velha de Morty, uma adolescente que busca sua própria identidade e relevância. 
        Ela inicialmente aparece como uma personagem secundária, mas acaba desempenhando papéis importantes em várias aventuras e questões familiares."/>
    </View>
)
}