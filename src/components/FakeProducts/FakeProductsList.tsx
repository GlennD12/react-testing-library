import EditIcon from '../../images/pen.png';
import DeleteIcon from '../../images/remove.png';

export const FakeProductsList = (props: any) => {
  return (
    <>
        <tbody>
            {props.productList.map((post: any) => (
            <tr
                key={post.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200"
            >
                <td className="px-6 py-4">{post.id}</td>
                <th scope="row" className="px-6 py-4">
                {post.title}
                </th>
                <td className="px-6 py-4">{post.description}</td>
                <td className="px-6 py-4">{post.price}</td>
                <td className="px-6 py-4">{post.category}</td>
                <td className="px-6 py-4"><img src={post.image} /></td>
                <td className="px-6 py-4 flex items-center">
                    <a href="#" className="py-14 px-2">
                        <img className="object-contain" src={EditIcon} alt="" />
                    </a>
                    <a href="#" className="py-14 px-2" onClick={props.onDeleteFakeProducts}>
                        <img className="object-contain" src={DeleteIcon} alt="" />
                    </a>
                </td>
            </tr>
            ))}
        </tbody>
    </>
  )
}
