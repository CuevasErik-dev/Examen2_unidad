import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Card } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MyNavbar from '../components/MyNavbar'
import MyButton from '../components/MyButton'

const Inicio = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <ScrollView>
                <MyButton />

                <Card
                    onPress={() => navigation.navigate("Info")}
                    style={{ margin: 20, alignItems: "center", padding: 10 }}
                >
                    <Card.Title title="Imagen de Referencia" />
                    <View style={{ alignItems: 'center', margin: 10 }}>
                        <Avatar.Image
                            size={100}
                            source={{
                                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvww8hogP9VN1MtOlgdAMv5w7zHtvEGE4RZg&s'
                            }}
                        />
                    </View>
                    <Card.Content>
                        <Text>Erik Israel Cuevas Hernandez</Text>
                    </Card.Content>
                </Card>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 10,
                    margin: 10
                }}>
                    <Card style={{ marginHorizontal: 5, flex: 1 }}>
                        <Card.Content>
                            <Text>"Hola, soy [Tu Nombre]..."</Text>
                        </Card.Content>
                    </Card>

                    <Card style={{ marginHorizontal: 5, flex: 1 }}>
                        <Card.Content>
                            <Text>"
                                ¿Por qué lo usamos?

                                Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                            </Text>
                        </Card.Content>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaProvider>
    )
}

export default Inicio
