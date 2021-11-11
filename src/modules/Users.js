export default function Users({users}){
    return (
        <div className="user-list-container">
            {users.map((user, index) =>
                <div className="user-container" key={index}>
                    <div className="user-name">{user.name}</div>
                    <div className="user-email">{user.email}</div>
                </div>
            )}

        </div>
    );
}