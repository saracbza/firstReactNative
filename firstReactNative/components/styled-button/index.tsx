import { Button } from 'react-native'

interface StyledButtonProps{
    text: string
    onPress: () => void
    color?: string
}

export default function StyledButton({text, onPress, color}: StyledButtonProps){
    return(
        <Button
        onPress={onPress}
        title={text} />
    )

}