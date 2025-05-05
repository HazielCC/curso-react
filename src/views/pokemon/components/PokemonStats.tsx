import {Stat} from "../../../interfaces/pokemon/PokemonDetailInterfaces.tsx";

export function PokemonStats({stats}: Readonly<{ stats: Stat[] }>) {
    console.log(stats);
    return (
        <>
            <h3> Estadisticas </h3>

            <p>
                <table>
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Base Stat</th>
                        <th>Effort</th>
                    </tr>
                    </thead>
                    <tbody>
                    {stats?.map((stat: Stat,) => (
                        <tr key={stat.stat.name}>
                            <td>{stat.stat.name}</td>
                            <td>{stat.base_stat}</td>
                            <td>{stat.effort}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </p>
        </>
    );
}