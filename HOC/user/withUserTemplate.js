import UserTemplate from "templates/UserTemplate"

const withUserTemplate = (WrappedComponent) => {
  return (props) => (
    <UserTemplate>
      <WrappedComponent {...props} />
    </UserTemplate>
  )
}

export default withUserTemplate