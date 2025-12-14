"use client"

import type { FC, MouseEventHandler, ReactNode } from "react"
import classNames from "classnames"

interface Props {
  id?: string
  tooltip: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  className?: string
  type?: "button" | "submit" | "reset"
  actionClasses?: string
  disabled?: boolean
  children?: ReactNode
}

const Button: FC<Props> = ({
  id,
  tooltip,
  onClick,
  className = "",
  type = "button",
  actionClasses = "action rounded-xl",
  disabled = false,
  children,
}) => {
  return (
    <button
      id={id}
      data-tooltip-content={tooltip}
      data-tooltip-variant="dark"
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={classNames(
        "p-2 font-medium transition-all duration-200",
        actionClasses,
        className,
        disabled && "opacity-50 cursor-not-allowed",
      )}
    >
      {children}
    </button>
  )
}

export default Button
