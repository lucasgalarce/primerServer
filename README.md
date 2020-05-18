# Consignas

1 Rehacer la página cliente para que sea un input text con un botón, y que al clickear el botón haga la consulta a la api /person pasando por query parameter el texto ingresado con la key name (que así como está retornará un array con las personas que contengan ese dato como nombre) y mostrar en una <ul> los resultados obtenidos, cada item con nombre y edad, x ej "Fernando, 24 años". De ser posible, chequear si la edad es > 1 para que diga "años", y si es 1 que diga "año".
(recordatorio: la consulta con query parameters tiene que tener la forma /person?name=loquesea)
2 Agregar otro input number para poner la edad mínima que tiene que tener la persona. Agregar ese valor también como query parameter (x ej name=Fer&minage=30) y modificar la API para que contemple ese filtro.
3 Hacer que ambosfiltros sean optativos. Es decir, si el input text tiene algún contenido, usarlo como filtro, si no, no. Si el input number tiene valor usarlo, si no, no. Si no hay filtros se retorna la lista completa.
4 Agregar en esa misma página un input checkbox para elegir si la búsqueda por nombre tiene que ser case sensitive (distinguir mayúsculas de minúsculas) o no. Agregar eso de alguna manera como query parameter (x ej, &case=y o case=n) y en la API evaluar ese parámetro para ver si se usa el toUpperCase en la comparación o no.
5 En la misma línea, agregar otro checkbox para determinar si se consideran los resultados parciales (es decir, si se usa el contains) o no (es decir, si se evalúa que el valor recibido sea igual al nombre completo).
