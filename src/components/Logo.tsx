import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 230 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M10.8 1.904V14.456C10.8 14.984 10.768 15.472 10.704 15.92C10.656 16.368 10.568 16.752 10.44 17.072C10.232 17.584 9.944 18.056 9.576 18.488C9.224 18.904 8.808 19.264 8.328 19.568C7.848 19.856 7.312 20.08 6.72 20.24C6.144 20.416 5.536 20.504 4.896 20.504C2.96 20.504 1.384 19.616 0.168 17.84L3.24 14.696C3.32 15.24 3.496 15.672 3.768 15.992C4.04 16.312 4.376 16.472 4.776 16.472C5.656 16.472 6.096 15.776 6.096 14.384V1.904H10.8ZM18.5586 7.688V14.624C18.5586 16.144 19.2946 16.904 20.7666 16.904C22.2386 16.904 22.9746 16.144 22.9746 14.624V7.688H27.3186V15.464C27.3186 17.128 26.7666 18.376 25.6626 19.208C24.5746 20.04 22.9426 20.456 20.7666 20.456C18.5906 20.456 16.9506 20.04 15.8466 19.208C14.7586 18.376 14.2146 17.128 14.2146 15.464V7.688H18.5586ZM21.4866 3.416C21.4866 3.112 21.5506 2.816 21.6786 2.528C21.8066 2.24 21.9746 1.992 22.1826 1.784C22.4066 1.576 22.6546 1.408 22.9266 1.28C23.2146 1.152 23.5186 1.088 23.8386 1.088C24.1586 1.088 24.4546 1.152 24.7266 1.28C25.0146 1.408 25.2626 1.584 25.4706 1.808C25.6946 2.016 25.8706 2.264 25.9986 2.552C26.1266 2.824 26.1906 3.12 26.1906 3.44C26.1906 3.76 26.1266 4.064 25.9986 4.352C25.8706 4.624 25.6946 4.872 25.4706 5.096C25.2626 5.304 25.0146 5.472 24.7266 5.6C24.4546 5.728 24.1586 5.792 23.8386 5.792C23.5186 5.792 23.2146 5.736 22.9266 5.624C22.6386 5.496 22.3826 5.328 22.1586 5.12C21.9506 4.896 21.7826 4.64 21.6546 4.352C21.5426 4.064 21.4866 3.752 21.4866 3.416ZM15.3426 3.416C15.3426 3.096 15.3986 2.8 15.5106 2.528C15.6386 2.24 15.8066 1.992 16.0146 1.784C16.2386 1.56 16.4946 1.392 16.7826 1.28C17.0706 1.152 17.3746 1.088 17.6946 1.088C18.0146 1.088 18.3186 1.152 18.6066 1.28C18.8946 1.408 19.1426 1.584 19.3506 1.808C19.5586 2.016 19.7186 2.264 19.8306 2.552C19.9586 2.824 20.0226 3.12 20.0226 3.44C20.0226 4.096 19.7986 4.656 19.3506 5.12C18.9026 5.568 18.3506 5.792 17.6946 5.792C17.0226 5.792 16.4626 5.568 16.0146 5.12C15.5666 4.656 15.3426 4.088 15.3426 3.416ZM30.2693 7.688H34.6133V9.704C35.0773 8.968 35.6453 8.408 36.3173 8.024C36.9893 7.624 37.7733 7.424 38.6693 7.424C38.7813 7.424 38.9013 7.424 39.0293 7.424C39.1733 7.424 39.3333 7.44 39.5093 7.472V11.624C38.9333 11.336 38.3093 11.192 37.6373 11.192C36.6293 11.192 35.8693 11.496 35.3573 12.104C34.8613 12.696 34.6133 13.568 34.6133 14.72V20H30.2693V7.688ZM45.5981 13.784C45.5981 14.184 45.6701 14.56 45.8141 14.912C45.9581 15.248 46.1501 15.544 46.3901 15.8C46.6461 16.056 46.9421 16.256 47.2781 16.4C47.6301 16.544 48.0061 16.616 48.4061 16.616C48.7901 16.616 49.1501 16.544 49.4861 16.4C49.8381 16.256 50.1341 16.056 50.3741 15.8C50.6301 15.544 50.8301 15.248 50.9741 14.912C51.1341 14.56 51.2141 14.192 51.2141 13.808C51.2141 13.408 51.1341 13.04 50.9741 12.704C50.8301 12.368 50.6301 12.072 50.3741 11.816C50.1181 11.56 49.8141 11.36 49.4621 11.216C49.1261 11.072 48.7741 11 48.4061 11C48.0221 11 47.6621 11.08 47.3261 11.24C46.9901 11.384 46.6941 11.584 46.4381 11.84C46.1821 12.08 45.9741 12.368 45.8141 12.704C45.6701 13.04 45.5981 13.4 45.5981 13.784ZM55.3421 7.688V19.16C55.3421 19.848 55.3021 20.464 55.2221 21.008C55.1421 21.552 55.0301 22.032 54.8861 22.448C54.6941 22.976 54.3901 23.464 53.9741 23.912C53.5741 24.376 53.0861 24.776 52.5101 25.112C51.9341 25.448 51.2781 25.712 50.5421 25.904C49.8221 26.096 49.0381 26.192 48.1901 26.192C47.2301 26.192 46.3501 26.072 45.5501 25.832C44.7501 25.592 44.0461 25.256 43.4381 24.824C42.8461 24.408 42.3581 23.912 41.9741 23.336C41.5901 22.776 41.3341 22.16 41.2061 21.488H46.1021C46.4061 22.304 47.0941 22.712 48.1661 22.712C49.0781 22.712 49.7741 22.456 50.2541 21.944C50.7501 21.432 50.9981 20.72 50.9981 19.808V18.632C50.6781 18.936 50.3661 19.192 50.0621 19.4C49.7741 19.592 49.4781 19.752 49.1741 19.88C48.8701 20.008 48.5501 20.096 48.2141 20.144C47.8781 20.208 47.5101 20.24 47.1101 20.24C46.2301 20.24 45.4221 20.088 44.6861 19.784C43.9501 19.48 43.3101 19.056 42.7661 18.512C42.2381 17.968 41.8221 17.32 41.5181 16.568C41.2301 15.8 41.0861 14.952 41.0861 14.024C41.0861 13.08 41.2461 12.208 41.5661 11.408C41.8861 10.592 42.3181 9.888 42.8621 9.296C43.4221 8.688 44.0781 8.216 44.8301 7.88C45.5981 7.528 46.4301 7.352 47.3261 7.352C48.7821 7.352 50.0061 7.896 50.9981 8.984V7.688H55.3421ZM67.5818 12.056C67.4378 11.448 67.1418 10.96 66.6938 10.592C66.2458 10.224 65.7018 10.04 65.0618 10.04C64.3898 10.04 63.8378 10.216 63.4058 10.568C62.9898 10.92 62.7258 11.416 62.6138 12.056H67.5818ZM62.4938 14.576C62.4938 16.448 63.3738 17.384 65.1338 17.384C66.0778 17.384 66.7898 17 67.2698 16.232H71.4698C70.6218 19.048 68.5018 20.456 65.1098 20.456C64.0698 20.456 63.1178 20.304 62.2538 20C61.3898 19.68 60.6458 19.232 60.0218 18.656C59.4138 18.08 58.9418 17.392 58.6058 16.592C58.2698 15.792 58.1018 14.896 58.1018 13.904C58.1018 12.88 58.2618 11.96 58.5818 11.144C58.9018 10.312 59.3578 9.608 59.9498 9.032C60.5418 8.456 61.2538 8.016 62.0858 7.712C62.9338 7.392 63.8858 7.232 64.9418 7.232C65.9818 7.232 66.9178 7.392 67.7498 7.712C68.5818 8.016 69.2858 8.464 69.8618 9.056C70.4378 9.648 70.8778 10.376 71.1818 11.24C71.4858 12.088 71.6378 13.048 71.6378 14.12V14.576H62.4938ZM74.1208 7.688H78.4648V9.248C79.0568 8.528 79.6568 8.048 80.2648 7.808C80.8728 7.552 81.5848 7.424 82.4008 7.424C83.2648 7.424 84.0008 7.568 84.6088 7.856C85.2328 8.128 85.7608 8.52 86.1928 9.032C86.5448 9.448 86.7848 9.912 86.9128 10.424C87.0408 10.936 87.1048 11.52 87.1048 12.176V20H82.7608V13.784C82.7608 13.176 82.7128 12.688 82.6168 12.32C82.5368 11.936 82.3848 11.632 82.1608 11.408C81.9688 11.216 81.7528 11.08 81.5128 11C81.2728 10.92 81.0168 10.88 80.7448 10.88C80.0088 10.88 79.4408 11.104 79.0408 11.552C78.6568 11.984 78.4648 12.608 78.4648 13.424V20H74.1208V7.688ZM103.327 9.368L109.063 1.904H114.871L107.695 10.472L115.543 20H109.447L103.327 12.152V20H98.6226V1.904H103.327V9.368ZM120.34 13.808C120.34 14.208 120.412 14.584 120.556 14.936C120.7 15.272 120.892 15.568 121.132 15.824C121.388 16.08 121.684 16.28 122.02 16.424C122.372 16.568 122.748 16.64 123.148 16.64C123.532 16.64 123.892 16.568 124.228 16.424C124.58 16.28 124.876 16.08 125.116 15.824C125.372 15.568 125.572 15.272 125.716 14.936C125.876 14.6 125.956 14.24 125.956 13.856C125.956 13.472 125.876 13.112 125.716 12.776C125.572 12.424 125.372 12.12 125.116 11.864C124.876 11.608 124.58 11.408 124.228 11.264C123.892 11.12 123.532 11.048 123.148 11.048C122.748 11.048 122.372 11.12 122.02 11.264C121.684 11.408 121.388 11.608 121.132 11.864C120.892 12.12 120.7 12.416 120.556 12.752C120.412 13.072 120.34 13.424 120.34 13.808ZM125.812 7.688H130.18V20H125.812V18.632C124.884 19.8 123.628 20.384 122.044 20.384C121.148 20.384 120.324 20.224 119.572 19.904C118.82 19.568 118.164 19.104 117.604 18.512C117.044 17.92 116.604 17.224 116.284 16.424C115.98 15.624 115.828 14.752 115.828 13.808C115.828 12.928 115.98 12.096 116.284 11.312C116.588 10.512 117.012 9.816 117.556 9.224C118.1 8.632 118.748 8.168 119.5 7.832C120.252 7.48 121.084 7.304 121.996 7.304C123.532 7.304 124.804 7.84 125.812 8.912V7.688ZM133.136 7.688H137.48V9.704C137.944 8.968 138.512 8.408 139.184 8.024C139.856 7.624 140.64 7.424 141.536 7.424C141.648 7.424 141.768 7.424 141.896 7.424C142.04 7.424 142.2 7.44 142.376 7.472V11.624C141.8 11.336 141.176 11.192 140.504 11.192C139.496 11.192 138.736 11.496 138.224 12.104C137.728 12.696 137.48 13.568 137.48 14.72V20H133.136V7.688ZM148.66 7.688V20H144.316V7.688H148.66ZM144.028 2.96C144.028 2.624 144.092 2.312 144.22 2.024C144.348 1.72 144.524 1.456 144.748 1.232C144.972 1.008 145.228 0.831999 145.516 0.704C145.82 0.575999 146.14 0.511999 146.476 0.511999C146.812 0.511999 147.124 0.575999 147.412 0.704C147.716 0.831999 147.98 1.008 148.204 1.232C148.428 1.456 148.604 1.72 148.732 2.024C148.86 2.312 148.924 2.624 148.924 2.96C148.924 3.296 148.86 3.616 148.732 3.92C148.604 4.208 148.428 4.464 148.204 4.688C147.98 4.912 147.716 5.088 147.412 5.216C147.124 5.344 146.812 5.408 146.476 5.408C146.14 5.408 145.82 5.344 145.516 5.216C145.228 5.088 144.972 4.912 144.748 4.688C144.524 4.464 144.348 4.208 144.22 3.92C144.092 3.616 144.028 3.296 144.028 2.96ZM151.629 7.688H155.973V9.704C156.437 8.968 157.005 8.408 157.677 8.024C158.349 7.624 159.133 7.424 160.029 7.424C160.141 7.424 160.261 7.424 160.389 7.424C160.533 7.424 160.693 7.44 160.869 7.472V11.624C160.293 11.336 159.669 11.192 158.997 11.192C157.989 11.192 157.229 11.496 156.717 12.104C156.221 12.696 155.973 13.568 155.973 14.72V20H151.629V7.688Z"
      />
    </svg>
  )
}
