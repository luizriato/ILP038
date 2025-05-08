export default function Cesta({ route }) {
  const { topo, detalhes, itens } = route.params;

  return (
    <FlatList
      data={itens.lista}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => (
        <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.tituloItens}>{itens.titulo}</Texto>
          </View>
        </>
      )}
    />
  );
}
